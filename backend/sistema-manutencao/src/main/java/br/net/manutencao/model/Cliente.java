package br.net.manutencao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "td_cliente")
@EqualsAndHashCode(callSuper = true)
public class Cliente extends Usuario {

    @Column(name = "cpf_usu", nullable = false, unique = true)
    @NotBlank(message = "O CPF não pode estar vazio.")
    private String cpf;

    @Column(name = "telefone_usu")
    private String telefone;

    @Column(name = "cep_usu")
    private String cep;

    @Column(name = "rua_usu")
    private String rua;

    @Column(name = "bairro_usu")
    private String bairro;

    @Column(name = "localidade_usu")
    private String localidade;

    @Column(name = "estado_usu")
    private String estado;

    @Column(name = "numero_usu")
    private String numero;

    @Column(name = "complemento_usu")
    private String complemento;

    public Cliente(
            String nome,
            String email,
            String senha,
            String cpf,
            String telefone,
            String cep,
            String rua,
            String bairro,
            String localidade,
            String estado,
            String numero,
            String complemento,
            String salt) {
        super();
        this.setNome(nome);
        this.setEmail(email);
        this.setSenha(senha);
        this.setSalt(salt);
        this.setPerfil(Perfil.CLIENTE);
        this.cpf = cpf;
        this.telefone = telefone;
        this.cep = cep;
        this.rua = rua;
        this.bairro = bairro;
        this.localidade = localidade;
        this.estado = estado;
        this.numero = numero;
        this.complemento = complemento;
    }
}
