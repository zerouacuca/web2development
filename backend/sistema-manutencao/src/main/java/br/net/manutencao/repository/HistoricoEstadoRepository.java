package br.net.manutencao.repository;

import br.net.manutencao.model.HistoricoEstado;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HistoricoEstadoRepository extends JpaRepository<HistoricoEstado, Long> {

    // Busca todos os históricos associados a uma determinada solicitação, ordenados por data/hora.
    List<HistoricoEstado> findBySolicitacaoIdOrderByDataHoraAsc(Long solicitacaoId);

}
