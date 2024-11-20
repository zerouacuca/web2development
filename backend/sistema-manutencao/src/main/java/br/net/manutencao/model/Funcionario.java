package br.net.manutencao.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Funcionario extends Usuario {

    @Column(name="datanasc_func")
    private LocalDate dataNasc;

    public Funcionario() {
        super.setPerfil(Perfil.FUNCIONARIO); 
    }


}
