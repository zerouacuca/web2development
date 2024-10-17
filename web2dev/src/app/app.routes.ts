import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PgClienteComponent } from './components/pg-cliente/pg-cliente.component';
import { NovaSolicitacaoComponent } from './components/nova-solicitacao/nova-solicitacao.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PgFuncionarioComponent } from './components/pg-funcionario/pg-funcionario.component';
import { OrcamentoclienteComponent } from './components/orcamentocliente/orcamentocliente.component';
import { SolicitabertafuncComponent } from './components/solicitabertafunc/solicitabertafunc.component';
import { AplicarmanutencaoComponent } from './components/aplicarmanutencao/aplicarmanutencao.component';
import { RedirecionarmanutencaoComponent } from './components/redirecionarmanutencao/redirecionarmanutencao.component';
import { EfetuarorcamentoComponent } from './components/efetuarorcamento/efetuarorcamento.component';
import { FinalizarsolicitComponent } from './components/finalizarsolicit/finalizarsolicit.component';
import { VisualizarsevicosComponent } from './components/visualizarsevicos/visualizarsevicos.component';
import { PagarservicoComponent } from './components/pagarservico/pagarservico.component';
import { ListarFuncionarioComponent } from './components/listar-funcionario/listar-funcionario.component';
import { InserirFuncionarioComponent } from './components/inserir-funcionario/inserir-funcionario.component';
import { EditarFuncionarioComponent } from './components/editar-funcionario/editar-funcionario.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';
import { InserirCategoriaComponent } from './components/inserir-categoria/inserir-categoria.component';
import { RelatorioCategoriaComponent } from './components/relatoriocategoria/relatoriocategoria.component';
import { ExcluirCategoriaComponent } from './components/excluir-categoria/excluir-categoria.component';
import { AtualizarCategoriaComponent } from './components/atualizar-categoria/atualizar-categoria.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {'path': 'login', component:LoginComponent},
    {'path': 'pgcliente', component:PgClienteComponent},
    {'path': 'novasolicitacao', component:NovaSolicitacaoComponent},
    {'path': 'cadastro', component:CadastroComponent},
    {'path': 'pgfuncionario', component:PgFuncionarioComponent},
    {'path': 'orcamentocliente', component:OrcamentoclienteComponent},
    {'path': 'solicitabertas', component:SolicitabertafuncComponent},
    {'path': 'aplicarmanutencao', component:AplicarmanutencaoComponent},
    {'path': 'redirecionarmanutencao', component:RedirecionarmanutencaoComponent},
    {'path': 'efetuarorcamento', component:EfetuarorcamentoComponent},
    {'path': 'finalizarsolicitacao', component:FinalizarsolicitComponent},
    {'path': 'visualizarservicos', component:VisualizarsevicosComponent},
    {'path': 'pagarservico', component:PagarservicoComponent},
    {'path': 'relatorioCategoria', component:RelatorioCategoriaComponent},
    {'path': 'crud-funcionario', redirectTo: 'funcionarios/listar', pathMatch: 'full'},
    {'path': 'funcionarios/listar', component: ListarFuncionarioComponent},
    {'path': 'funcionarios/novo', component: InserirFuncionarioComponent},
    {'path': 'funcionarios/editar/:id', component: EditarFuncionarioComponent},
    {'path': 'categorias/listar', component: ListarCategoriaComponent},
    {'path': 'categorias/novo', component: InserirCategoriaComponent},
    {'path': 'categorias/excluir', component: ExcluirCategoriaComponent},
    {'path': 'categorias/atualizar', component: AtualizarCategoriaComponent}
];
