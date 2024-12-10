package br.net.manutencao.repository;

import br.net.manutencao.model.Solicitacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {

<<<<<<< HEAD
    // Busca solicitações relacionadas ao cliente
    List<Solicitacao> findByClienteId(Long clienteId);
=======
    public List<Solicitacao> findByClienteId(Long clienteId);
    public List<Solicitacao> findByFuncionarioId(Long funcionarioId);
>>>>>>> 32690a5c4260ff12e6d95320277d60d2f348f068

    // Busca solicitações relacionadas ao funcionário
    List<Solicitacao> findByFuncionarioId(Long funcionarioId);

    // Consulta para total de solicitações agrupado por data (relatório)
    @Query("SELECT FUNCTION('DATE', s.date), SUM(s.preco) " +
           "FROM Solicitacao s " +
           "GROUP BY FUNCTION('DATE', s.date) " +
           "ORDER BY FUNCTION('DATE', s.date)")
    List<Object[]> findTotalPorData();
<<<<<<< HEAD
}
=======
}
>>>>>>> 32690a5c4260ff12e6d95320277d60d2f348f068
