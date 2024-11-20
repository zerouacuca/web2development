package br.net.manutencao.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "td_categoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cat")
    private Long id;

    @Column(name = "nome_cat", nullable = false, unique = true)
    private String nome;
}
