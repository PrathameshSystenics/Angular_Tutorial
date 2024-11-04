import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  CanActivateChildFn,
} from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

// implementing the CanActivateFn guard.
// when it returns true you can able to view the specified component.
export const CanActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  let authService: AuthService = inject(AuthService);

  return authService.isLoggedIn;
};

// implementing the canActivate Child guard
export const CanActivateChild: CanActivateChildFn = (childroute, state) => {
  return CanActivate(childroute, state);
};
