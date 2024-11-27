package br.net.manutencao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.manutencao.model.Usuario;

public interface CadastroRepository extends JpaRepository<Usuario, Long> {
    boolean existsByEmail(String email);
    boolean existsByCpf(String cpf);
}
 