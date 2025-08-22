import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public Home:HomeService ,private http: HttpClient,public router:Router){}
  trip: any;
  stripe: Stripe | null = null;
  cardElement: any;
  cardholderName = '';
  async ngOnInit() {
    this.Home.GetUserDetailes();
    const storedTrip = localStorage.getItem('selectedTrip');
    if (storedTrip) {
      this.trip = JSON.parse(storedTrip);
    } else {
      console.error('No trip found in local storage');
    }
    this.stripe = await loadStripe('pk_test_51R8dsqCGN2E7zFcXdPVIE1B8ndiDWNoima7FBuhIqnILWgPkieSbytSbC8p1fNJktU1ESliRFmnvfi56m7d4wPMI00HSkfy1Ki');
    if (!this.stripe) {
      console.error('Stripe failed to load.');
      return;
    }

    const elements = this.stripe.elements();
    this.cardElement = elements.create('card');
    this.cardElement.mount('#card-element');
  }

  async onSubmit() {
    if (!this.stripe) {
      console.error('Stripe has not been initialized.');
      return;
    }
    const { paymentMethod, error } = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardElement,
      billing_details: { name: this.cardholderName }
    });
  
    if (error) {
      console.error(error.message);
      return;
    }

    this.http.post('https://localhost:7140/api/Payments/payment', {
      paymentMethodId: paymentMethod.id,
      UsersDetails: this.Home.UserDetails,
      Trip: this.trip
    }, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(response);
        link.href = url;
        link.download = 'Ticket.pdf';
        link.click();
        window.URL.revokeObjectURL(url);
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful!',
          text: 'Your payment has been processed successfully.',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
        }).then(() => {
          this.router.navigate(['/home/Trips']);
        });
        console.log('Payment successful!');
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Payment Failed!',
          text: 'There was an error processing your payment. Please try again.',
          confirmButtonText: 'OK',
          allowOutsideClick: false
        });
        console.error('Payment failed', error);
      }
    );
  }
}
