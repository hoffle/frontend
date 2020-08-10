import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private AuthService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean { 
    if (!this.AuthService.userIsAuthenticated) { 
      this.router.navigateByUrl('/auth');
    }
    return this.AuthService.userIsAuthenticated;
  }
}
