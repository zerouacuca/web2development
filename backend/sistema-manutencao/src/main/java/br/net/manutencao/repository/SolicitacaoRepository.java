package br.net.manutencao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.manutencao.model.Solicitacao;

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
    List<Solicitacao> findByClienteId(Long clienteId);
}