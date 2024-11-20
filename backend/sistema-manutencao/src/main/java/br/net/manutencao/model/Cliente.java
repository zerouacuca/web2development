package br.net.manutencao.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Entity
@Table(name = "Usuario")
@Data
@EqualsAndHashCode(callSuper = true) // Aqui é para que o lombok gere os getters e setter para o que precisa da superclasse
public class Cliente extends Usuario {

    public Cliente() {
        super.setPerfil(Perfil.CLIENTE); 
    }
}
