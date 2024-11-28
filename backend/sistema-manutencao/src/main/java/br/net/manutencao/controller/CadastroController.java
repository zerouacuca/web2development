package br.net.manutencao.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.net.manutencao.model.Usuario;
import br.net.manutencao.service.CadastroService;
import jakarta.validation.Valid;

import java.time.LocalDate;


@RestController
@RequestMapping("/cadastro")
@CrossOrigin(origins = "http://localhost:4200")
public class CadastroController {

    @Autowired
    private CadastroService cadastroService;

    @PostMapping("/cliente")
    public ResponseEntity<?> autocadastrar(@Valid @RequestBody Usuario usuario) {
        try {
            // Definindo o perfil para "CLIENTE" quando o endpoint é /autocadastro
            usuario.setPerfil(Usuario.Perfil.CLIENTE);
            Usuario usuarioCadastrado = cadastroService.autocadastrar(usuario);
            return ResponseEntity.status(201).body(usuarioCadastrado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(409).body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Erro no servidor. Tente novamente mais tarde."));
        }
    }

    @PostMapping("/funcionario")
    public ResponseEntity<?> novoFuncionario(@Valid @RequestBody Usuario usuario) {
        try {
            // Definindo o perfil para "FUNCIONARIO" quando o endpoint é /funcionarios/novo
            usuario.setPerfil(Usuario.Perfil.FUNCIONARIO);
            Usuario usuarioCadastrado = cadastroService.autocadastrar(usuario);
            return ResponseEntity.status(201).body(usuarioCadastrado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(409).body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Erro no servidor. Tente novamente mais tarde."));
        }
    }
}
