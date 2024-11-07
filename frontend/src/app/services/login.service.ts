import { Injectable } from '@angular/core';
import { Usuario, Login } from '../shared/models';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) {}  
  
  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }
  
  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }
  
  logout() {
    delete localStorage[LS_CHAVE];
  }
  
  login(login: Login): Observable<Usuario | null> {
    let usu = new Usuario(1, login.login, login.login, login.senha, "FUNC");

    if (login.login === login.senha) {
      if (login.login === "admin") {
        usu.perfil = "ADMIN";
      } else if (login.login === "gerente") {
        usu.perfil = "GERENTE";
      }

      this.usuarioLogado = usu;  
      this.router.navigate(['/pgFuncionario']);  
      return of(usu);
    } else {
      return of(null);
    }
  }
}
