import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(@Inject(Router) private router: Router) {}
  onSubmit() {
    this.router.navigate(['/pg-cliente']);
  }
}