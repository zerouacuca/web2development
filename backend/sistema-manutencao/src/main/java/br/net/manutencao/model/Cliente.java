package br.net.manutencao.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "Usuario")
@Data
@EqualsAndHashCode(callSuper = true) // Aqui é para que o lombok gere os getters e setter para o que precisas da superclasse
public class Cliente extends Usuario {
    private String perfil = "CLIENTE";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String login;
    private String senha;
    @Override
    public void setLogin(Object login) {
       
        throw new UnsupportedOperationException("Unimplemented method 'setLogin'");
    }
    @Override
    public void setPerfil(Object perfil) {
        
        throw new UnsupportedOperationException("Unimplemented method 'setPerfil'");
    }
    
}

