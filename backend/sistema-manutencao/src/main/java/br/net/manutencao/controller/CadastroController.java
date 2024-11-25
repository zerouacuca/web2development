package br.net.manutencao.controller;

import java.util.HashMap;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.net.manutencao.model.Cliente;
import br.net.manutencao.service.CadastroService;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class CadastroController {

    @Autowired
    private CadastroService cadastroService;

    @PostMapping("/autocadastro")
    public ResponseEntity<?> autocadastrar(@RequestBody Cliente cliente) {
        try {
            cadastroService.autocadastrar(cliente);
            return ResponseEntity.ok("Cadastro realizado com sucesso! Verifique seu e-mail para obter a senha.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            e.printStackTrace(); // Exibe o erro no console para análise
            return ResponseEntity.status(500).body(Map.of("message", e.getMessage()));
        }
    }
}
