import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/pg-cliente']);
    } else {
      alert('Nome de usuário ou senha incorretos');
    }
  }
}