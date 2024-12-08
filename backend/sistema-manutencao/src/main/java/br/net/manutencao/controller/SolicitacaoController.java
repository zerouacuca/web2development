package br.net.manutencao.controller;

import br.net.manutencao.DTO.SolicitacaoCreateDTO;
import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.service.SolicitacaoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoController {

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

        try {
            List<Object[]> solicitacoes = solicitacaoService.listarSolicitacoesData();
            System.out.println(solicitacoes);
            return ResponseEntity.ok(solicitacoes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body(Map.of("message", "Erro ao gerar relatorio. Tente novamente mais tarde."));
        }
    }
}