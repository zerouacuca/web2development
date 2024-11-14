import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  isPasswordVisible: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    
    if (this.authService.login(this.email, this.senha)) {
      this.router.navigate(['/pg-cliente']);
    } else {
      alert('Email ou senha incorretos');
    }
  }
}