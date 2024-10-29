package br.net.manutencao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.manutencao.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
    boolean existsByCpf(String cpf);
    boolean existsByEmail(String email);
}
