import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from '../../services/solicitacao.service';
import { jsPDF } from 'jspdf';
import { HeaderfuncionarioComponent } from "../headerfuncionario/headerfuncionario.component";
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-relatoriocategoria',
    standalone: true,
    imports: [HeaderfuncionarioComponent, NgFor, CommonModule, FormsModule],
    templateUrl: './relatoriocategoria.component.html',
    styleUrls: ['./relatoriocategoria.component.css']
})
export class RelatorioCategoriaComponent implements OnInit {
    requests: { categoria: string; receita: number }[] = [];
    filteredRequests: { categoria: string; receita: number }[] = [];
    selectedCategory: string = 'all';
    categories: string[] = [];

    constructor(private solicitacaoService: SolicitacaoService) { }

    ngOnInit() {
        this.solicitacaoService.listarFinalizadasPorCategoria().subscribe(data => {
            this.requests = data.map(item => ({
                categoria: item[0],  
                receita: item[1]     
            }));

            this.categories = Array.from(new Set(this.requests.map(request => request.categoria)));

            this.categories.unshift('all');
            
            this.filtrarPorCategoria();
        });
    }

    filtrarPorCategoria() {
        if (this.selectedCategory === 'all') {
            this.filteredRequests = this.agruparReceitas(this.requests);
        } else {
            const filtered = this.requests.filter(request => request.categoria === this.selectedCategory);
            this.filteredRequests = this.agruparReceitas(filtered);
        }
    }

    gerarPDF() {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text("Relatório de Receitas por Categoria", 105, 20, { align: 'center' });

        doc.setFontSize(12);
        doc.text("Categoria", 20, 30);
        doc.text("Receita (R$)", 100, 30);

        let y = 40;
        for (const request of this.filteredRequests) {
            doc.text(request.categoria, 20, y);
            doc.text(request.receita.toFixed(2), 100, y);
            y += 10;
        }

        const total = `TOTAL: ${this.calcularSomaReceita().toFixed(2)}`;
        doc.setFont("helvetica", "bold");
        doc.text(total, 100, y);

        doc.save("relatorio_receitas_categoria.pdf");
    }

    calcularSomaReceita(): number {
        return this.filteredRequests.reduce((soma, request) => soma + request.receita, 0);
    }

    private agruparReceitas(requests: { categoria: string; receita: number }[]): { categoria: string; receita: number }[] {
        const mapaReceitas = new Map<string, number>();

        requests.forEach(request => {
            const receitaAtual = mapaReceitas.get(request.categoria) || 0;
            mapaReceitas.set(request.categoria, receitaAtual + request.receita);
        });

        return Array.from(mapaReceitas.entries()).map(([categoria, receita]) => ({ categoria, receita }));
    }
}
