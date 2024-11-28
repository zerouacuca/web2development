package br.net.manutencao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Table(name = "td_funcionario")
@EqualsAndHashCode(callSuper = true)
public class Funcionario extends Usuario {

    @Column(name = "data_nasc", nullable = false)
    private LocalDate DataNasc;

    public Funcionario(String nome, String email, String senha, LocalDate DataNasc, String salt) {
        super();
        this.setNome(nome);
        this.setEmail(email);
        this.setSenha(senha);
        this.setSalt(salt);
        this.setPerfil(Perfil.FUNCIONARIO);
        this.DataNasc = DataNasc;
    }
}
