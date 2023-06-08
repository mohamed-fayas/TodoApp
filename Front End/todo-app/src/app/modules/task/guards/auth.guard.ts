import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

// guarding route


  constructor(private router: Router) { }
  canActivate() {

    let tokenExist = !!localStorage.getItem('token')
    console.log(tokenExist)
    if (!tokenExist) {
      this.router.navigateByUrl('/user')
    }

    return true
  }
  
}
