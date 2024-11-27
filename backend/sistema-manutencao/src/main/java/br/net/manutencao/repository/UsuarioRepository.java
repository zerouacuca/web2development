package br.net.manutencao.repository;
import br.net.manutencao.model.Usuario;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    public Optional<Usuario> findByLogin(String login);
    public Optional<Usuario> findByLoginAndSenha(String login, String senha);
    public Optional<Usuario> findById(Integer valueOf);
    
    boolean existsByCpf(String cpf); //codigo veio de antigo FuncionarioRepository.java
}