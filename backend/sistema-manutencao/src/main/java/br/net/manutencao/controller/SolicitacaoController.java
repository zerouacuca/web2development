package br.net.manutencao.controller;

<<<<<<< HEAD
=======
import br.net.manutencao.DTO.SolicitacaoCreateDTO;
>>>>>>> 32690a5c4260ff12e6d95320277d60d2f348f068
import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.service.SolicitacaoService;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD
=======
import java.util.HashMap;
>>>>>>> 32690a5c4260ff12e6d95320277d60d2f348f068
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoController {

    @Autowired
    private SolicitacaoService solicitacaoService;

<<<<<<< HEAD
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
=======
    // Endpoint para listar as solicitações do usuario
    @GetMapping("/listar/{id_usu}")
    public ResponseEntity<List<Solicitacao>> listarSolicitacoesPorUsuario(@PathVariable("id_usu") Long id) {
        List<Solicitacao> solicitacoes = solicitacaoService.listarSolicitacoesPorUsuario(id);
        // Retorna 204 No Content se não houver solicitações
        if (solicitacoes.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        // Retorna 200 OK com as solicitações
        return ResponseEntity.ok(solicitacoes);
    }

    @GetMapping("orcamentocliente/{id}")
    public ResponseEntity<?> getSolicitacaoOrcada(@PathVariable Long id) {
        try {
            Solicitacao solicitacao = solicitacaoService.getSolicitacaoById(id);
            return ResponseEntity.ok(solicitacao);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(404).body("Solicitação não encontrada.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Erro no servidor. Tente novamente mais tarde.");
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getSolicitacao(@PathVariable Long id) {
        try {
            Solicitacao solicitacao = solicitacaoService.getSolicitacaoById(id);
            return ResponseEntity.ok(solicitacao);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(404).body("Solicitação não encontrada.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Erro no servidor. Tente novamente mais tarde.");
        }
    }

    @PostMapping("/criar")
    public ResponseEntity<?> createSolicitacao(@RequestBody SolicitacaoCreateDTO novaSolicitacao) {

        System.out.println("Dados recebidos: " + novaSolicitacao);
        Map<String, String> response = new HashMap<>();
        try {
            solicitacaoService.createSolicitacao(novaSolicitacao);
            response.put("message", "Solicitação criada com sucesso!");
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            response.put("error", e.getMessage());
            return ResponseEntity.status(409).body(response);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", "Erro no servidor. Tente novamente mais tarde.");
            return ResponseEntity.status(500).body(response);
        }
    }

    // relatorio
    @GetMapping("/relatoriodata")
    public ResponseEntity<?> listRelatorioData() {

>>>>>>> 32690a5c4260ff12e6d95320277d60d2f348f068
        try {
            List<Object[]> solicitacoes = solicitacaoService.listarSolicitacoesData();
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
<<<<<<< HEAD
                    .body(Map.of("message", "Erro ao gerar relatório. Tente novamente mais tarde."));
        }
    }
}
=======
                    .body(Map.of("message", "Erro ao gerar relatorio. Tente novamente mais tarde."));
        }
    }

    @PutMapping("/orcar/{id}")
    public String orcarSolicitacao(@PathVariable Long id, @RequestParam Float valorOrcado) {
        try {
            // Atualiza a solicitação com o valor orçado
            Solicitacao solicitacao = solicitacaoService.orcarSolicitacao(id, valorOrcado);
            return "Solicitação orçada com sucesso! Novo valor: " + solicitacao.getPreco() + " e Status: " + solicitacao.getStatus();
        } catch (Exception e) {
            return "Erro ao orçar solicitação: " + e.getMessage();
        }
    }
}
>>>>>>> 32690a5c4260ff12e6d95320277d60d2f348f068
