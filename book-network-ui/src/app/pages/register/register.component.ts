import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationRequest } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = {
    email: '', password: '', firstname: '', lastname: ''
  };

  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {

  }

  login() {
    this.router.navigate(['/login']);
  }
  register() {
    this.errorMessage = [];
    this.authService.registerUser({
      body: this.registerRequest
    }).subscribe(
      {
        next: () => {
          this.router.navigate(['activate-account']);
        },
        error: (err) => {
          console.log(err);
          if (err.error.validationErrors) {
            this.errorMessage = err.error.validationErrors;
          } else {
            this.errorMessage.push(err.error);
          }

        }
      }
    )

  }

}
