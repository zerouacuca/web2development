package br.net.manutencao.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true) // Aqui é para que o lombok gere os getters e setter para o que precisas da superclasse
public class Cliente extends Usuario {
    private String perfil = "CLIENTE";
}
