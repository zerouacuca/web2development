package br.net.manutencao.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(unique = true, nullable = false)
    private String cpf;

    @NotBlank
    private String nome;

    @NotBlank
    @Column(unique = true, nullable = false)
    private String email;

    private String senha;

    private String telefone;


    private String logradouro;
    private String cep;
    private String uf;
    private String bairro;
    private String cidade;


    private String perfil = "CLIENTE";
}
