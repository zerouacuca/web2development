package br.net.manutencao.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/solicitacaomanutencao")
public class SolicitacaoManutencaoController {

    @PostMapping
    public ResponseEntity<String> criarSolicitacao(@RequestBody solicitacao) {
        // Simule o processamento dos dados
        System.out.println("Descrição do Equipamento: " + solicitacao.getDescricaoEquipamento());
        System.out.println("Categoria do Equipamento: " + solicitacao.getCategoriaEquipamento());
        System.out.println("Descrição do Defeito: " + solicitacao.getDescricaoDefeito());

        // Retorne uma resposta de sucesso
        return ResponseEntity.status(HttpStatus.CREATED).body("Solicitação criada com sucesso!");
    }
}
