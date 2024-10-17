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
import { ListarFuncionarioComponent } from './pages/listar-funcionario/listar-funcionario.component';
import { InserirFuncionarioComponent } from './pages/inserir-funcionario/inserir-funcionario.component';
import { EditarFuncionarioComponent } from './pages/editar-funcionario/editar-funcionario.component';
import { RelatorioCategoriaComponent } from './components/relatoriocategoria/relatoriocategoria.component';

export const routes: Routes = [
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
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'crud-funcionario', 
      redirectTo: 'funcionarios/listar',
      pathMatch: 'full'
    },
    {
        path: 'funcionarios/listar',
        component: ListarFuncionarioComponent
    },
    {
        path: 'funcionarios/novo',
        component: InserirFuncionarioComponent
    },
    {
        path: 'funcionarios/editar/:id',
        component: EditarFuncionarioComponent
    }
];
