package br.net.manutencao.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.repository.SolicitacaoRepository;

@Service
public class SolicitacaoService {

    private final SolicitacaoRepository solicitacaoRepository;

    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }
    
    public List<Solicitacao> buscarPorCliente(Long idCliente) {
        return solicitacaoRepository.findByClienteId(idCliente);
    }
    
}

