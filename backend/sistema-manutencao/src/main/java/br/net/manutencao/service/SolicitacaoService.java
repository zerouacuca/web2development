package br.net.manutencao.service;

import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.repository.SolicitacaoRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class SolicitacaoService {

    private final SolicitacaoRepository solicitacaoRepository;

    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }

    public Solicitacao aprovarServico(Long id) {
        Solicitacao solicitacao = solicitacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        solicitacao.setEstado("APROVADA");
        solicitacao.setDataHoraAprovacao(LocalDateTime.now());

        return solicitacaoRepository.save(solicitacao);
    }

    public Solicitacao rejeitarServico(Long id, String motivo) {
        Solicitacao solicitacao = solicitacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        solicitacao.setEstado("REJEITADA");
        solicitacao.setMotivoRejeicao(motivo);
        solicitacao.setDataHoraRejeicao(LocalDateTime.now());

        return solicitacaoRepository.save(solicitacao);
    }
    
    public List<Solicitacao> getSolicitacoesAbertas() {
        return solicitacaoRepository.findByEstado("ABERTA");
    }

    public Solicitacao efetuarOrcamento(Long id, Double valorOrcamento, String funcionario) {
        Solicitacao solicitacao = solicitacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        solicitacao.setValorOrcamento(valorOrcamento);
        solicitacao.setFuncionarioOrcamento(funcionario);
        solicitacao.setDataHoraOrcamento(LocalDateTime.now());
        solicitacao.setEstado("ORÇADA");

        return solicitacaoRepository.save(solicitacao);
    }

    public List<Solicitacao> listarSolicitacoesFiltradas(
            String estado, LocalDateTime inicio, LocalDateTime fim, String destino) {
        return solicitacaoRepository.findSolicitacoesFiltradas(estado, inicio, fim, destino);
    }

    public Solicitacao finalizarSolicitacao(Long id, String funcionario) {
        Solicitacao solicitacao = solicitacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        solicitacao.setEstado("FINALIZADA");
        solicitacao.setDataHoraFinalizacao(LocalDateTime.now());
        solicitacao.setFuncionarioFinalizacao(funcionario);

        return solicitacaoRepository.save(solicitacao);
    }
}
