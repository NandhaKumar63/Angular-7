import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateCartGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const cartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
        if (cartCount > 0) {
            return true;
        }
        this.router.navigate(['/products']);
        return false;
    }
}
