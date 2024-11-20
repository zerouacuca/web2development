package br.net.manutencao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.manutencao.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    
}
