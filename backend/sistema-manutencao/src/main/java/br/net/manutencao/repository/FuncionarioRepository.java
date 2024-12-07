package br.net.manutencao.repository;

import br.net.manutencao.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
    boolean existsByEmail(String email);

    @Query(value = "SELECT * FROM td_funcionario ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Funcionario findRandomFuncionario();
}
