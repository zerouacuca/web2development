package br.net.manutencao.service;

import br.net.manutencao.DTO.FuncionarioCreateDTO;
import br.net.manutencao.model.Funcionario;
import br.net.manutencao.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    // Método para criar um novo funcionário
    public void createFuncionario(FuncionarioCreateDTO funcionarioCreateDTO) {
        Funcionario funcionario = new Funcionario(
                funcionarioCreateDTO.getEmail(),
                funcionarioCreateDTO.getNome(),
                funcionarioCreateDTO.getSenha(),
                null, // Salt pode ser gerado automaticamente
                funcionarioCreateDTO.getDataNasc());
        funcionarioRepository.save(funcionario);
    }

    // Método para listar todos os funcionários
    public List<Funcionario> getAllFuncionarios() {
        return funcionarioRepository.findAll();
    }

    // Método para atualizar os dados de um funcionário
    public Funcionario atualizar(Long id, FuncionarioCreateDTO funcionarioAtualizadoDTO) {
        // Busca o funcionário existente pelo ID
        Funcionario funcionario = funcionarioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Funcionário não encontrado para atualização"));
    
        // Verifica se o email foi alterado e se já existe outro funcionário com o mesmo email
        if (!funcionario.getEmail().equals(funcionarioAtualizadoDTO.getEmail()) &&
                funcionarioRepository.existsByEmail(funcionarioAtualizadoDTO.getEmail())) {
            throw new IllegalArgumentException("Email já cadastrado!");
        }
    
        // Atualiza os dados do funcionário
        funcionario.setNome(funcionarioAtualizadoDTO.getNome());
        funcionario.setEmail(funcionarioAtualizadoDTO.getEmail());
        funcionario.setDataNasc(funcionarioAtualizadoDTO.getDataNasc());
    
        // Atualiza a senha, caso fornecida
        if (funcionarioAtualizadoDTO.getSenha() != null && !funcionarioAtualizadoDTO.getSenha().isBlank()) {
            funcionario.setSenha(funcionarioAtualizadoDTO.getSenha());
        }
    
        // Salva as alterações no banco
        return funcionarioRepository.save(funcionario);
    }

    // Método para excluir um funcionário
    public void excluir(Long id) {
        // Verifica se o funcionário existe antes de tentar excluí-lo
        if (!funcionarioRepository.existsById(id)) {
            throw new IllegalArgumentException("Funcionário não encontrado");
        }
    
        // Exclui o funcionário pelo ID
        funcionarioRepository.deleteById(id);
    }
}
