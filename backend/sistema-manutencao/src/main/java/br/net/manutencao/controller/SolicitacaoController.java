package br.net.manutencao.controller;

import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.service.SolicitacaoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solicitacoes")
public class SolicitacaoController {
     private final SolicitacaoService solicitacaoService;

    public SolicitacaoController(SolicitacaoService solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
    }

    // RF011 
    @GetMapping("/abertas")
    public List<Solicitacao> getSolicitacoesAbertas() {
        return solicitacaoService.getSolicitacoesAbertas();
    }

    // RF012 
    @PostMapping("/{id}/orcamento")
    public Solicitacao efetuarOrcamento(
            @PathVariable Long id,
            @RequestParam Double valor,
            @RequestParam String funcionario) {
        return solicitacaoService.efetuarOrcamento(id, valor, funcionario);
    }

     
    // RF006 
    @PostMapping("/{id}/aprovar")
    public Solicitacao aprovarServico(@PathVariable Long id) {
        return solicitacaoService.aprovarServico(id);
    }

    // RF007
    @PostMapping("/{id}/rejeitar")
    public Solicitacao rejeitarServico(
            @PathVariable Long id,
            @RequestParam String motivo) {
        return solicitacaoService.rejeitarServico(id, motivo);
    }
}
}
