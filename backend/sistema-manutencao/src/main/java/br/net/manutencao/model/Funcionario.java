package br.net.manutencao.model;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Funcionario extends Usuario {
    private String perfil = "FUNCIONARIO";

    @Override
    public Object getLogin() {
        
        throw new UnsupportedOperationException("Unimplemented method 'getLogin'");
    }

    @Override
    public void setLogin(Object login) {
        
        throw new UnsupportedOperationException("Unimplemented method 'setLogin'");
    }

    @Override
    public void setPerfil(Object perfil) {
        
        throw new UnsupportedOperationException("Unimplemented method 'setPerfil'");
    }
}
