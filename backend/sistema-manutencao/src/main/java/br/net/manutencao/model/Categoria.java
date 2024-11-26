package br.net.manutencao.model;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonBackReference;  // Importação necessária

import java.util.List;

@Entity
@Data
@Table(name = "td_categoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;

    // JsonBackReference para evitar a recursão infinita
    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
    @JsonBackReference  // Evita a serialização da lista de solicitacoes na categoria
    private List<Solicitacao> solicitacoes;
}
