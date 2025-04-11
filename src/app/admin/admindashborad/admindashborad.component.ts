import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/Auth.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-admindashborad',
  templateUrl: './admindashborad.component.html',
  styleUrls: ['./admindashborad.component.css']
})
export class AdmindashboradComponent implements OnInit {

  reportType: string = ''; // Default to annual
  selectedYear: string = '';     // Year selected by the user
  selectedMonth: string = '';    // Month selected by the user
  availableYears = ['2025', '2024', '2023', '2022', '2021', '2020'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  reportData: any[] = [];

  constructor(public admin: AdminService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.admin.GetCountOfUsers();
    this.admin.GetCountOfTrainStation();
    this.admin.GetAdminDetails()
  }

  // Handle change in report type (annual vs. monthly)
  onReportTypeChange(): void {
    if (this.reportType === 'annual') {
      this.selectedMonth = '';  // Reset the selected month if annual is chosen
    }
  }

  // Fetch report based on selected filters
  loadFilteredReport(): void {
    const reportRequest = {
      type: this.reportType,
      year: this.selectedYear,
      month: this.reportType === 'monthly' ? this.convertMonthNameToNumber(this.selectedMonth) : undefined  // Only include month if report type is monthly
    };

    this.admin.GetReport(reportRequest).subscribe(
      (data) => {
        this.reportData = data; // Store the fetched data in reportData
      },
      (err) => {
        console.error("Error fetching report data:", err);
      }
    );
  }

  // Convert month name to month number (01, 02, etc.)
  convertMonthNameToNumber(monthName: string): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthIndex = months.indexOf(monthName); // Get the index of the month name (0-based)
    return (monthIndex >= 0) ? ('0' + (monthIndex + 1)).slice(-2) : ''; // Convert to 2-digit format (e.g., '01', '02')
  }

  logout(): void {
    this.auth.Logout();
  }

  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.reportData);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(data, 'Report.xlsx');
  }

  exportToPDF(): void {
    const doc = new jsPDF();
    const headers = [['Number of Users', 'Number of Reservations', 'Profit']];
    const data = this.reportData.map(item => [item.usersCount, item.reservationsCount, `$${item.profit}`]);

    autoTable(doc, {
      head: headers,
      body: data,
      startY: 20
    });

    doc.save('Report.pdf');
  }
  
}
