package br.net.manutencao.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "td_admin")
public class Admin extends Usuario {
    public Admin() {
        super.setPerfil(Perfil.ADMIN); 
    }
    
}
