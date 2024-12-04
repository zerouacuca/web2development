package br.net.manutencao.controller;



import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.service.SolicitacaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoController {

    private final SolicitacaoService solicitacaoService;

    // Construtor para injeção de dependência
    public SolicitacaoController(SolicitacaoService solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
    }

    // Endpoint para listar as solicitações de um cliente
    @GetMapping("/listar/{id_usu}")
    public ResponseEntity<List<Solicitacao>> listarSolicitacoesPorCliente(
            @PathVariable("id_usu") Long clienteId) {
        List<Solicitacao> solicitacoes = solicitacaoService.listarSolicitacoesPorCliente(clienteId);
        
        // Retorna 204 No Content se não houver solicitações
        if (solicitacoes.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        
        // Retorna 200 OK com as solicitações
        return ResponseEntity.ok(solicitacoes);
    }

    // relatorio
    @GetMapping("/relatoriodata")
    public ResponseEntity<?> listRelatorioData() {

       
        try {
            List<Object[]> solicitacoes = solicitacaoService.listarSolicitacoesData();
            System.out.println(solicitacoes);
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body(Map.of("message", "Erro ao gerar relato. Tente novamente mais tarde."));
        }
    }

    
}