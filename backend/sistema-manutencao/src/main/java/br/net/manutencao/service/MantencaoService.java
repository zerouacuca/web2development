package br.net.manutencao.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.repository.SolicitacaoRepository;
import br.net.manutencao.repository.HistoricoSolicitacaoRepository;

@Service
public class ManutencaoService {

    private final SolicitacaoRepository solicitacaoRepository;
    private final HistoricoSolicitacaoRepository historicoSolicitacaoRepository;

    @Autowired
    public ManutencaoService(SolicitacaoRepository solicitacaoRepository,
                             HistoricoSolicitacaoRepository historicoSolicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
        this.historicoSolicitacaoRepository = historicoSolicitacaoRepository;
    }

    @Transactional
    public void efetuarManutencao(Long solicitacaoId, String descricaoManutencao, String orientacoesCliente, String funcionario) {
        Optional<Solicitacao> optionalSolicitacao = solicitacaoRepository.findById(solicitacaoId);

        if (optionalSolicitacao.isEmpty()) {
            throw new RuntimeException("Solicitação de manutenção não encontrada.");
        }

        Solicitacao solicitacao = optionalSolicitacao.get();
        solicitacao.setDescricaoManutencao(descricaoManutencao);
        solicitacao.setOrientacoesCliente(orientacoesCliente);
        solicitacao.setFuncionarioResponsavel(funcionario);
        solicitacao.setDataHoraManutencao(LocalDateTime.now());
        solicitacao.setStatus("AGUARDANDO PAGAMENTO");

        solicitacaoRepository.save(solicitacao);

        // Registro no histórico
        historicoSolicitacaoRepository.save(new HistoricoSolicitacao(
            solicitacao,
            "Manutenção efetuada",
            LocalDateTime.now()
        ));
    }

    @Transactional
    public void redirecionarManutencao(Long solicitacaoId, String novaEquipeResponsavel) {
        Optional<Solicitacao> optionalSolicitacao = solicitacaoRepository.findById(solicitacaoId);

        if (optionalSolicitacao.isEmpty()) {
            throw new RuntimeException("Solicitação de manutenção não encontrada.");
        }

        Solicitacao solicitacao = optionalSolicitacao.get();
        solicitacao.setEquipeResponsavel(novaEquipeResponsavel);
        solicitacao.setStatus("REDIRECIONADA");

        solicitacaoRepository.save(solicitacao);

        // Registro no histórico
        historicoSolicitacaoRepository.save(new HistoricoSolicitacao(
            solicitacao,
            "Manutenção redirecionada para " + novaEquipeResponsavel,
            LocalDateTime.now()
        ));
    }
}
