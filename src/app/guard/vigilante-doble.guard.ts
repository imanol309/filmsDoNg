import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteDobleGuard implements CanActivate {
  
  constructor(private router: Router) {}

  redirect(flag: boolean): any {
    if(!flag) {
      this.router.navigate(['/', 'home'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const datoUsuario = JSON.parse(localStorage.getItem('Token'));
    this.redirect(datoUsuario)
    return true;
  }
  
}
