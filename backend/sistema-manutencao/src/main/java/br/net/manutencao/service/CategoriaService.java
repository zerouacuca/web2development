package br.net.manutencao.service;


import br.net.manutencao.DTO.CategoriaCreateDTO;
import br.net.manutencao.model.Categoria;
import br.net.manutencao.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public void createCategoria(CategoriaCreateDTO categoriaCreateDTO) {
        try {
            Categoria categoria = new Categoria(
            categoriaCreateDTO.getNome());
            categoriaRepository.save(categoria);
        } catch (Exception e) {
            e.printStackTrace(); 
            throw new RuntimeException("Erro ao criar categoria: " + e.getMessage(), e);
        }
    }

    // Método para listar todas as categorias
    public List<Categoria> getAllCategorias() {
        return categoriaRepository.findAll();
    }

    public Categoria atualizar(Long id, CategoriaCreateDTO categoriaAtualizadoDTO) throws Exception {


        Categoria categoria = categoriaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Categoria não encontrado para atualização"));

      
        if (!categoria.getNome().equals(categoriaAtualizadoDTO.getNome()) &&
                categoriaRepository.existsByNome(categoriaAtualizadoDTO.getNome())) {
            throw new IllegalArgumentException("Categoria já existe!");
        }

        categoria.setNome(categoriaAtualizadoDTO.getNome());

        // Salva as alterações no banco
        return categoriaRepository.save(categoria);
    }

    // Método para excluir uma Categoria
    public void excluir(Long id) {
        // Verifica se a categoria existe
        if (!categoriaRepository.existsById(id)) {
            throw new IllegalArgumentException("Categoria não encontrada");
        }
        categoriaRepository.deleteById(id);
    }

}
