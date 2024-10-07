import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(username: string, password: string): boolean {
    // Implementar chamada http backend depois bem aqui.
    return username === 'usuario' && password === 'senha';
  }
}