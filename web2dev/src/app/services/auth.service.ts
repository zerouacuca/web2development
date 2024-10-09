import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(email: string, senha: string): boolean {
    // Implementar chamada http backend depois bem aqui.
    return email === 'email' && senha === 'senha';
  }
}