package br.net.manutencao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.net.manutencao.model.Cliente;
import br.net.manutencao.service.CadastroService;

@RestController
@RequestMapping("/clientes")
public class CadastroController {

    @Autowired
    private CadastroService cadastroService;

    @PostMapping("/autocadastro")
    public ResponseEntity<String> autocadastrar(@RequestBody Cliente cliente) {
        try {
            cadastroService.autocadastrar(cliente);
            return ResponseEntity.ok("Cadastro realizado com sucesso! Verifique seu e-mail para obter a senha.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
