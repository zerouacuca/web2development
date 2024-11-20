package br.net.manutencao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
@Table(name="td_usuario")
public abstract class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_usu")
    private Long id;

    @Column(name="nome_usu")
    @NotBlank
    private String nome;

    @Column(name="login_usu")
    private String login;
    
    @Column(name="senha_usu")
    private String senha;

    @Column(name="perfil_usu")
    private String perfil;
   

   
}
