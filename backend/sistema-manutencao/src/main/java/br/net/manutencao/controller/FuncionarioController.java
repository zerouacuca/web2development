package br.net.manutencao.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.net.manutencao.model.Funcionario;
import br.net.manutencao.service.FuncionarioService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/funcionario")
@CrossOrigin(origins = "http://localhost:4200")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    //@GetMapping("/listar")
    //public ResponseEntity<?>

    @PostMapping("/cadastrar")
    public ResponseEntity<?> novoFuncionario(@Valid @RequestBody Funcionario funcionario) {
        try {
            Funcionario funcionarioCadastrado = funcionarioService.cadastrar(funcionario);
            return ResponseEntity.status(201).body(funcionarioCadastrado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(409).body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Erro no servidor. Tente novamente mais tarde."));
        }
    }
}
