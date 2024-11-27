package br.net.manutencao.service;


import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.repository.SolicitacaoRepository;
import br.net.manutencao.repository.HistoricoSolicitacaoRepository;

@Service
public class SolicitacaoService {

    private final SolicitacaoRepository solicitacaoRepository;
    private final HistoricoSolicitacaoRepository historicoEstadoRepository;

    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository,
            HistoricoSolicitacaoRepository historicoEstadoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
        this.historicoEstadoRepository = historicoEstadoRepository;
    }

    @Transactional(readOnly = true)
    public List<Solicitacao> listarSolicitacoesPorCliente(Long clienteId) {
        return solicitacaoRepository.findByClienteId(clienteId);
    }
}
