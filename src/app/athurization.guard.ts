import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export const athurizationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token) {
    if (state.url.indexOf('admin') >= 0) {
      let user: any = localStorage.getItem('user');
      user = JSON.parse(user);
      if (user.RoleId === '1') {
        return true;
      } else {
        showAccessDeniedAndRedirect(router);
        return false;
      }
    } else {
      showAccessDeniedAndRedirect(router);
      return false;
    }
  } else {
    showAccessDeniedAndRedirect(router);
    return false;
  }
};

function showAccessDeniedAndRedirect(router: Router) {
  Swal.fire({
    title: 'Access Denied',
    text: 'You are not authorized to access this page',
    icon: 'error',
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: 'Go to Home',
  }).then(() => {
    router.navigate(['/home']);
  });
}
