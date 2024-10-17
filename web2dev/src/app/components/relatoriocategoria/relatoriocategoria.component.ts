import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Adicionar o BrowserModule


const inputClasses = 'w-full p-2 rounded border border-input focus:outline-none focus:ring focus:ring-ring';
const buttonClasses = 'bg-primary text-primary-foreground p-2 rounded-lg w-full hover:bg-primary/80 transition-colors';

@Component({
  selector: 'app-relatorio-categoria',  // Nome corrigido no selector e na classe
  
  template: `
    <div class="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold mb-8">Maintenance Reports</h1>
      <app-filter-options></app-filter-options>  <!-- O selector precisa ser o mesmo no template -->
    </div>
  `,
})
export class RelatorioCategoriaComponent {}  // Nome da classe corrigido para PascalCase

@Component({
  selector: 'app-filter-options',  // Selector correto do componente de filtros

  
  template: `
    <div class="bg-card w-full max-w-md p-6 rounded-lg shadow-lg">
      <h2 class="text-lg font-bold mb-4">Filter Options</h2>
      <div class="flex flex-col space-y-4">
        
        <label for="category" class="text-sm">Select Category:</label>
        <select id="category" class="${inputClasses}">
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
        </select>
        <button class="${buttonClasses}">Apply Filters</button>
      </div>
    </div>
  `,
})
export class FilterOptionsComponent {}

@NgModule({
  declarations: [
    RelatorioCategoriaComponent,  // Declarar ambos os componentes aqui
    FilterOptionsComponent,
  ],
  imports: [
    BrowserModule,  // Importar o BrowserModule para aplicações rodando no navegador
  ],
  bootstrap: [RelatorioCategoriaComponent]  // Definir o componente principal de bootstrap
})
export class AppModule { }
