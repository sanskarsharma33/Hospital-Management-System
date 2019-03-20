import { user } from './auth-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService{
  private isAuthenticated = false;
  private token: string;

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  constructor(private http: HttpClient, private router: Router) {}

  createUser(){
   /**/
  }

  loginUser(username:string, role:string, password:string){
    console.log("Reached Front");
    const user:user={
      username:username,
      role:role,
      password:password
    }
    this.http.post<{ token: string}>
    ("http://localhost:3000/api/user/login", user)
    .subscribe(response => {
      console.log("Making HTTP POST request to /api/user/login");

      const token = response.token;
      this.token = token;
      console.log(this.token + "Front");
      if (token) {
        this.isAuthenticated = true;
        this.router.navigate(["/receptionist"]);
      }

    });
  }

}