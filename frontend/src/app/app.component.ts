import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { PgClienteComponent } from "./components/pg-cliente/pg-cliente.component";
import { LoginComponent } from "./auth/login/login.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PgClienteComponent, LoginComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  // Exemplo de requisição
  getData() {
    this.http.get('http://localhost:8080/api/usuarios').subscribe(data => {
      console.log(data);
    });

}}
