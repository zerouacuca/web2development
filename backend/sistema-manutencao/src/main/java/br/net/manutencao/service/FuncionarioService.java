package br.net.manutencao.service;

import br.net.manutencao.model.Usuario;
import br.net.manutencao.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    @Autowired
    private UsuarioRepository funcionarioRepository;

    public Usuario salvar(Usuario funcionario) {
        if (funcionarioRepository.existsByCpf(funcionario.getCpf())) {
            throw new IllegalArgumentException("CPF já cadastrado!");
        }
        return funcionarioRepository.save(funcionario);
    }

    public List<Usuario> listarTodos() {
        return funcionarioRepository.findAll();
    }

    public Usuario atualizar(Long id, Usuario funcionarioAtualizado) {
        Usuario funcionario = funcionarioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Funcionário não encontrado"));
        funcionario.setNome(funcionarioAtualizado.getNome());
        funcionario.setCpf(funcionarioAtualizado.getCpf());
        funcionario.setDataNasc(funcionarioAtualizado.getDataNasc());
        funcionario.setTelefone(funcionarioAtualizado.getTelefone());
        return funcionarioRepository.save(funcionario);
    }

    public void excluir(Long id) {
        if (!funcionarioRepository.existsById(id)) {
            throw new IllegalArgumentException("Funcionário não encontrado");
        }
        funcionarioRepository.deleteById(id);
    }
}
