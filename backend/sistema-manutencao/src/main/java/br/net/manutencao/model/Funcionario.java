package br.net.manutencao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Funcionario extends Usuario {
    private String perfil = "FUNCIONARIO";

    @Column(name="datanasc_func")
    private String dataNasc;
}
