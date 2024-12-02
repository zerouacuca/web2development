package br.net.manutencao.controller;

import org.springframework.web.bind.annotation.RestController;

import br.net.manutencao.DTO.CategoriaCreateDTO;
import br.net.manutencao.DTO.CategoriaListDTO;
import br.net.manutencao.model.Categoria;
import br.net.manutencao.service.CategoriaService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/categorias")
public class CategoriaController {
    
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/listar")
    public ResponseEntity<?> listCategorias() {
        try {
            List<CategoriaListDTO> categorias = categoriaService.getAllCategorias()
                    .stream()
                    .map(func -> new CategoriaListDTO(func.getId(), func.getNome()))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(categorias);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body(Map.of("message", "Erro ao listar categorias. Tente novamente mais tarde."));
        }
    }

    @PostMapping("/criar")
    public ResponseEntity<Map<String, String>> createCategoria(
            @RequestBody CategoriaCreateDTO categoriaCreateDTO) {
        System.out.println("Dados recebidos: " + categoriaCreateDTO);
        Map<String, String> response = new HashMap<>();
        try {
            categoriaService.createCategoria(categoriaCreateDTO);
            response.put("message", "Categoria criada com sucesso!");
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            response.put("error", e.getMessage());
            return ResponseEntity.status(409).body(response);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", "Erro no servidor. Tente novamente mais tarde.");
            return ResponseEntity.status(500).body(response);
        }
    }


    @PutMapping("/alterar/{id}")
    public ResponseEntity<?> alterarCategoria(@PathVariable Long id,
            @RequestBody CategoriaCreateDTO categoriaCreateDTO) {
        try {
            Categoria categoriaAtualizado = categoriaService.atualizar(id, categoriaCreateDTO);
            return ResponseEntity.ok(categoriaAtualizado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(404).body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Erro no servidor. Tente novamente mais tarde."));
        }
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<?> excluirFuncionario(@PathVariable Long id) {
        try {
            categoriaService.excluir(id);
            return ResponseEntity.ok(Map.of("message", "Categoria excluído com sucesso."));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(404).body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Erro no servidor. Tente novamente mais tarde."));
        }
    }
}

