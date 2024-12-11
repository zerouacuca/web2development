package br.net.manutencao.controller;

import br.net.manutencao.DTO.ManutencaoDTO;
import br.net.manutencao.DTO.SolicitacaoCreateDTO;
import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.model.Usuario;
import br.net.manutencao.repository.UsuarioRepository;
import br.net.manutencao.service.SolicitacaoService;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private SolicitacaoService solicitacaoService;

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

    @PutMapping("/orcar/{id}")
    public String orcarSolicitacao(@PathVariable Long id, @RequestParam Float valorOrcado) {
        try {
            // Atualiza a solicitação com o valor orçado
            Solicitacao solicitacao = solicitacaoService.orcarSolicitacao(id, valorOrcado);
            return "Solicitação orçada com sucesso! Novo valor: " + solicitacao.getPreco() + " e Status: "
                    + solicitacao.getStatus();
        } catch (Exception e) {
            return "Erro ao orçar solicitação: " + e.getMessage();
        }
    }

    @PutMapping("/finalizarsolicitacao/{id}")
    public ResponseEntity<?> finalizarSolicitacao(@PathVariable Long id) {
        try {
            // Atualiza a solicitação com o valor orçado
            Solicitacao solicitacao = solicitacaoService.finalizarSolicitacao(id);
            return ResponseEntity.ok(solicitacao.getStatus());
        } catch (Exception e) {

            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Erro ao finalizar solicitação");
            errorResponse.put("details", e.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PutMapping("/aprovar/{id}")
    public ResponseEntity<?> aprovarSolicitacao(@PathVariable Long id) {
        try {
            Solicitacao solicitacao = solicitacaoService.aprovarSolicitacao(id);
            return ResponseEntity.ok(solicitacao.getStatus());
        } catch (Exception e) {

            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Erro ao aprovar solicitação");
            errorResponse.put("details", e.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PutMapping("/resgatar/{id}")
    public ResponseEntity<?> resgatarSolicitacao(@PathVariable Long id) {
        try {
            // Atualiza a solicitação com o valor orçado
            Solicitacao solicitacao = solicitacaoService.resgatarSolicitacao(id);
            return ResponseEntity.ok(solicitacao.getStatus());
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Erro ao pagar solicitação");
            errorResponse.put("details", e.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PutMapping("/pagarservice/{id}")
    public ResponseEntity<?> pagarSolicitacao(@PathVariable Long id) {
        try {
            // Atualiza a solicitação com o valor orçado
            Solicitacao solicitacao = solicitacaoService.pagarSolicitacao(id);
            return ResponseEntity.ok(solicitacao.getStatus());
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Erro ao pagar solicitação");
            errorResponse.put("details", e.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PutMapping("/rejeitar/{id}")
    public ResponseEntity<?> rejeitarSolicitacao(@PathVariable Long id, @RequestParam String justificativa) {
        try {
            Solicitacao solicitacao = solicitacaoService.rejeitarSolicitacao(id, justificativa);
            return ResponseEntity.ok(solicitacao.getStatus());
        } catch (Exception e) {

            Map<String, String> errorResponse = new HashMap<>();

            errorResponse.put("error", "Erro ao rejeitar solicitação");
            errorResponse.put("details", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/listarfinalizadaspordata")
    public ResponseEntity<?> listarSolicitacoesFinalizadasPorData() {
        try {
            List<Object[]> solicitacoes = solicitacaoService.listarSolicitacoesFinalizadasPorData();
            // Verifica se a lista está vazia e retorna 204 No Content se não houver
            // resultados
            if (solicitacoes.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            // Retorna 200 OK com os dados agrupados por data
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body(Map.of("message",
                            "Erro ao gerar relatório de solicitações finalizadas. Tente novamente mais tarde."));
        }
    }

    @GetMapping("/listarfinalizadasporcategoria")
    public ResponseEntity<?> listarSolicitacoesFinalizadasPorCategoria() {
        try {
            List<Object[]> solicitacoes = solicitacaoService.listarSolicitacoesFinalizadasPorCategoria();
            // Verifica se a lista está vazia e retorna 204 No Content se não houver
            // resultados
            if (solicitacoes.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            // Retorna 200 OK com os dados agrupados por categoria
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body(Map.of("message",
                            "Erro ao gerar relatório de solicitações finalizadas por categoria. Tente novamente mais tarde."));
        }
    }

    @PostMapping("/{id}/manutencao")
    public ResponseEntity<?> efetuarManutencao(
            @PathVariable Long id,
            @RequestBody ManutencaoDTO manutencaoDTO,
            @RequestParam Long funcionarioId) { // Recebe o ID do funcionário logado como parâmetro

        try {
            Usuario funcionarioLogado = usuarioRepository.findById(funcionarioId)
                    .orElseThrow(
                            () -> new EntityNotFoundException("Funcionário não encontrado com o ID: " + funcionarioId));

            Solicitacao solicitacao = solicitacaoService.efetuarManutencao(id, manutencaoDTO, funcionarioLogado);

            return ResponseEntity.ok(Map.of(
                    "message", "Manutenção efetuada com sucesso.",
                    "solicitacao", solicitacao));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                    "error", "Erro ao processar a manutenção. Tente novamente mais tarde."));
        }
    }

}
