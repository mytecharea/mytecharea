import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule,
    RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
   private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = false;
  errorMessage = '';

   loginForm = this.fb.nonNullable.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]

  });
login(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe({

        next: (response) => {

          console.log('Login successful', response);

          this.loading = false;

          this.router.navigate(['/']);

        },

        error: (error) => {

          console.error('Login failed', error);

          this.loading = false;

          this.errorMessage =
            error.error?.message ||
            'Invalid email or password';

        }

      });

  }

}

