import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidateLoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate');
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/auth');
      return false;
    } else {
      return true;
    }
  }
}
