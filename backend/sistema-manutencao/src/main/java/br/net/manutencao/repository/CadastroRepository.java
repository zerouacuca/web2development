package br.net.manutencao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.manutencao.model.Cliente;

public interface CadastroRepository extends JpaRepository<Cliente, Long> {
    boolean existsByEmail(String email);
    boolean existsByCpf(String cpf);
}
 