package br.net.manutencao.repository;

import br.net.manutencao.model.Solicitacao;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
    List<Solicitacao> findByEstado(String estado);
}
