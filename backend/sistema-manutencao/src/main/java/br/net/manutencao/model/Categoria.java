package br.net.manutencao.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

import br.net.manutencao.model.Usuario.Perfil;

@Entity
@Data
@Table(name = "td_categoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;

    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
    private List<Solicitacao> solicitacoes;

    public Categoria(
            String nome
    ) {
        this.nome = nome;
    }
}
