package br.net.manutencao.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.net.manutencao.model.Funcionario;
import br.net.manutencao.model.Usuario;
import br.net.manutencao.repository.UsuarioRepository;
import br.net.manutencao.service.FuncionarioService;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @PostMapping
    public ResponseEntity<Funcionario> cadastrarFuncionario(@RequestBody Funcionario funcionario) {
        
        Optional<Usuario> existente = usuarioRepository.findByLogin(funcionario.getLogin());
        if (existente.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        Funcionario novoFuncionario = (Funcionario) usuarioRepository.save(funcionario);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoFuncionario);
    }

    @GetMapping
    public List<Funcionario> listarFuncionarios() {
        return funcionarioService.listarTodos();
    }

    @PutMapping("/{id}")
    public Funcionario atualizarFuncionario(@PathVariable Long id, @RequestBody Funcionario funcionario) {
        return funcionarioService.atualizar(id, funcionario);
    }

    @DeleteMapping("/{id}")
    public void excluirFuncionario(@PathVariable Long id) {
        funcionarioService.excluir(id);
    }
}
