package br.net.manutencao.service;

import br.net.manutencao.model.Funcionario;
import br.net.manutencao.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public Funcionario salvar(Funcionario funcionario) {
        if (funcionarioRepository.existsByCpf(funcionario.getCpf())) {
            throw new IllegalArgumentException("CPF já cadastrado!");
        }
        return funcionarioRepository.save(funcionario);
    }

    public List<Funcionario> listarTodos() {
        return funcionarioRepository.findAll();
    }

    public Funcionario atualizar(Long id, Funcionario funcionarioAtualizado) {
        Funcionario funcionario = funcionarioRepository.findById(id)
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
