package br.net.manutencao.model;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Admin extends Usuario {
    private String perfil = "ADMIN";
    
}
