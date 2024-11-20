package br.net.manutencao.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.repository.SolicitacaoRepository;
import br.net.manutencao.service.SolicitacaoService;

import java.util.List;

@RestController
@RequestMapping("/api/solicitacoes")
public class SolicitacaoController {

    private final SolicitacaoRepository solicitacaoRepository;
    private final SolicitacaoService solicitacaoService;

    public SolicitacaoController(SolicitacaoRepository solicitacaoRepository, SolicitacaoService solicitacaoService) {
        this.solicitacaoRepository = solicitacaoRepository;
        this.solicitacaoService = solicitacaoService;
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
    
    // Vizualisar serviços do cliente
    public ResponseEntity<List<Solicitacao>> visualizarServicos(@PathVariable Long idCliente) { 
        List<Solicitacao> solicitacoes = solicitacaoService.buscarPorCliente(idCliente);
        return ResponseEntity.ok(solicitacoes);
    }

    // Endpoint para criar uma nova solicitação
    @PostMapping
    public ResponseEntity<Solicitacao> criarSolicitacao(@RequestBody Solicitacao solicitacao) {
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
    public ResponseEntity<Object> deletarSolicitacao(@PathVariable Long id) {
        return solicitacaoRepository.findById(id).map(solicitacao -> {
            solicitacaoRepository.delete(solicitacao);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}

