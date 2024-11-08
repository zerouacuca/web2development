package br.net.manutencao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
abstract class Usuario {
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
    
    enum Perfil {
        ADMIN,
        CLIENTE,
        FUNCIONARIO
    }
}
