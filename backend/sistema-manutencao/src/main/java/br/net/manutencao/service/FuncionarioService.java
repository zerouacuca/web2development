package br.net.manutencao.service;

import br.net.manutencao.model.Funcionario;
import br.net.manutencao.model.Usuario;
import br.net.manutencao.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Funcionario cadastrar(Funcionario funcionario) {
        if (usuarioRepository.existsByEmail(funcionario.getEmail())) {
            throw new IllegalArgumentException("Email já cadastrado!");
        }
        return usuarioRepository.save(funcionario);
    }

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public Funcionario atualizar(Long id, Funcionario funcionarioAtualizado) {
        Funcionario funcionario = (Funcionario) usuarioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Funcionário não encontrado para atualização"));

        if (!funcionario.getEmail().equals(funcionarioAtualizado.getEmail()) &&
                usuarioRepository.existsByEmail(funcionarioAtualizado.getEmail())) {
            throw new IllegalArgumentException("Email já cadastrado!");
        }

        funcionario.setNome(funcionarioAtualizado.getNome());
        funcionario.setEmail(funcionarioAtualizado.getEmail());
        funcionario.setDataNasc(funcionarioAtualizado.getDataNasc());

        return usuarioRepository.save(funcionario);
    }
    
    public void excluir(Long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new IllegalArgumentException("Funcionário não encontrado");
        }
        usuarioRepository.deleteById(id);
    }
}
