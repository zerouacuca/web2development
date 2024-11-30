package br.net.manutencao.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/solicitacoes")
public class SolicitacaoController {

    private final SolicitacaoRepository solicitacaoRepository;

    public SolicitacaoController(SolicitacaoRepository solicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }

    // Endpoint para listar todas as solicitações
    @GetMapping
    public List<Solicitacao> listarTodas() {
        return solicitacaoRepository.findAll();
    }

    // Endpoint para buscar uma solicitação por ID
    @GetMapping("/{id}")
    public ResponseEntity<Solicitacao> buscarPorId(@PathVariable Long id) {
        return solicitacaoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Endpoint para criar uma nova solicitação
    @PostMapping
    public ResponseEntity<Solicitacao> criarSolicitacao(@RequestB
    
    
    
    ody Solicitacao solicitacao) {
        Solicitacao novaSolicitacao = solicitacaoRepository.save(solicitacao);
        return ResponseEntity.ok(novaSolicitacao);
    }

    // Endpoint para atualizar uma solicitação existente
    @PutMapping("/{id}")
    public ResponseEntity<Solicitacao> atualizarSolicitacao(@PathVariable Long id, @RequestBody Solicitacao solicitacaoAtualizada) {
        return solicitacaoRepository.findById(id).map(solicitacao -> {
            solicitacao.setDescricaoEquipamento(solicitacaoAtualizada.getDescricaoEquipamento());
            solicitacao.setDescricaoDefeito(solicitacaoAtualizada.getDescricaoDefeito());
            solicitacao.setEstado(solicitacaoAtualizada.getEstado());
            solicitacao.setCategoria(solicitacaoAtualizada.getCategoria());
            solicitacao.setDataHora(solicitacaoAtualizada.getDataHora());
            Solicitacao solicitacaoSalva = solicitacaoRepository.save(solicitacao);
            return ResponseEntity.ok(solicitacaoSalva);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Endpoint para deletar uma solicitação
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarSolicitacao(@PathVariable Long id) {
        return solicitacaoRepository.findById(id).map(solicitacao -> {
            solicitacaoRepository.delete(solicitacao);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}

