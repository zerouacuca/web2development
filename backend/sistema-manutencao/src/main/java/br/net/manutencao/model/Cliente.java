package br.net.manutencao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Table(name = "td_cliente")
@Entity
@EqualsAndHashCode(callSuper = true)
public class Cliente extends Usuario {

    @Column(name = "cpf_usu", nullable = false, unique = true)
    @NotBlank(message = "O CPF não pode estar vazio.")
    private String cpf;

    @Column(name = "telefone_usu")
    private String telefone;

    @Column(name = "endereco_usu")
    private String endereco;
    public Cliente() {
        super.setPerfil(Perfil.CLIENTE); 
    }
}
