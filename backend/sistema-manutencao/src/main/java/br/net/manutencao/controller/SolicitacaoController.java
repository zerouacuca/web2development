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

    // Endpoint para listar as solicitações de um usuário (cliente ou funcionário)
    @GetMapping("/listar/{id_usu}")
    public ResponseEntity<List<Solicitacao>> listarSolicitacoesPorUsuario(
            @PathVariable("id_usu") Long id_usu) {
        try {
            List<Solicitacao> solicitacoes = solicitacaoService.listarSolicitacoesPorUsuario(id_usu);
            
            // Retorna 204 No Content se não houver solicitações
            if (solicitacoes.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            
            // Retorna 200 OK com as solicitações
            return ResponseEntity.ok(solicitacoes);
        } catch (IllegalArgumentException e) {
            // Retorna 400 Bad Request se o id_usu for inválido ou o tipo for desconhecido
            return ResponseEntity.badRequest().body(List.of());
        }
    }

    // Endpoint para gerar relatório de solicitações por data
    @GetMapping("/relatoriodata")
    public ResponseEntity<?> listRelatorioData() {
        try {
            List<Object[]> solicitacoes = solicitacaoService.listarSolicitacoesData();
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body(Map.of("message", "Erro ao gerar relatório. Tente novamente mais tarde."));
        }
    }
}
