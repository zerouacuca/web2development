package br.net.manutencao.controller;

import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.service.SolicitacaoService;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.time.LocalDateTime;

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
    public ResponseEntity<Void> deletarSolicitacao(@PathVariable Long id) {
        return solicitacaoRepository.findById(id).map(solicitacao -> {
            solicitacaoRepository.delete(solicitacao);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }

    //RF013
    @GetMapping("/filtrar")
    public List<Solicitacao> listarSolicitacoes(
            @RequestParam(required = false) String estado,
            @RequestParam(required = false) LocalDateTime inicio,
            @RequestParam(required = false) LocalDateTime fim,
            @RequestParam(required = false) String destino) {
        return solicitacaoService.listarSolicitacoesFiltradas(estado, inicio, fim, destino);
    }

    //RF016
    @PostMapping("/{id}/finalizar")
    public Solicitacao finalizarSolicitacao(
            @PathVariable Long id,
            @RequestParam String funcionario) {
        return solicitacaoService.finalizarSolicitacao(id, funcionario);
}

