package br.net.manutencao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.manutencao.model.Solicitacao;

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
    List<Solicitacao> findByClienteId(Long clienteId);
}

package br.net.manutencao.repository;

import br.net.manutencao.model.Solicitacao;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.time.LocalDateTime;

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
    List<Solicitacao> findByEstado(String estado);
}

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {

    @Query("SELECT s FROM Solicitacao s WHERE (:estado IS NULL OR s.estado = :estado) " +
           "AND (:inicio IS NULL OR s.dataHoraAbertura >= :inicio) " +
           "AND (:fim IS NULL OR s.dataHoraAbertura <= :fim) " +
           "AND (:destino IS NULL OR s.funcionarioOrcamento = :destino) " +
           "ORDER BY s.dataHoraAbertura ASC")
    List<Solicitacao> findSolicitacoesFiltradas(
            @Param("estado") String estado,
            @Param("inicio") LocalDateTime inicio,
            @Param("fim") LocalDateTime fim,
            @Param("destino") String destino);
}