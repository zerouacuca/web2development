package br.net.manutencao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.net.manutencao.model.Usuario;
import br.net.manutencao.repository.UsuarioRepository;


import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:4200") // Permitindo o CORS para o frontend Angular
public class UsuarioController {
    // Injetar o repositorio
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        List<Usuario> lista = usuarioRepository.findAll();
        return ResponseEntity.ok(lista);
    }

    @GetMapping("usuarios/{id}")
    public ResponseEntity<Usuario> obterUsuarioPorId(@PathVariable("id") int id) {
        Optional<Usuario> op = usuarioRepository.findById(Integer.valueOf(id));

        if(op.isPresent()){
            return ResponseEntity.ok(op.get());
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> inserir(@RequestBody Usuario usuario) {
        Optional<Usuario> op = usuarioRepository.findByLogin(usuario.getLogin());
        if(op.isPresent()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(op.get());
        }else{
            usuario.setId((long) -1);
            usuarioRepository.save(usuario);
            return ResponseEntity.status(HttpStatus.CREATED).body(usuario);
        }
    }


    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> alterar(@PathVariable("id") Long id, @RequestBody Usuario usuario) {
        Optional<Usuario> op = usuarioRepository.findById(Long.valueOf(id));
        if(op.isPresent()){
            usuario.setId(id);
            usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuario);
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> remover(@PathVariable("id") Long id) {
        Optional<Usuario> op = usuarioRepository.findById(Long.valueOf(id));
        if(op.isPresent()){
            usuarioRepository.delete(op.get());
            return ResponseEntity.ok(op.get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
}
