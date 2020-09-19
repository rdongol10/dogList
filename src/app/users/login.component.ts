import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { IUser } from '../users/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private token: TokenStorageService, private router: Router) { }
  loginFormGroup: FormGroup;
  loginErrorMessage: string;
  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(): void {
    // this.authService.login(this.loginFormGroup)
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: data => {
        console.log(data);
        this.token.saveToken(data.token);
        const user: IUser = {
          userName: data.userName,
          email: data.email,
          role: data.role
        };
        this.token.saveUser(user);
        this.router.navigate(['/home']);
      },
      error: err => {
        this.loginErrorMessage = 'Username or password is incorrect';
      }
    });
  }

}
