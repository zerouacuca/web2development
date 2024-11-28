package br.net.manutencao.model;

import java.time.LocalDate;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name = "td_usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usu")
    private Long id;
    
    @Column(name = "cpf_usu", nullable = false, unique = true)
    @NotBlank(message = "O CPF não pode estar vazio.")
    private String cpf;
    
    @Column(name = "email_usu", nullable = false, unique = true)
    @NotBlank(message = "O email não pode estar vazio.")
    @Email(message = "O email deve ser válido.")
    private String email;

    @Column(name = "nome_usu", nullable = false)
    @NotBlank(message = "O nome não pode estar vazio.")
    private String nome;

    @Column(name = "senha_usu", nullable = false)
    @NotBlank(message = "A senha não pode estar vazia.")
    private String senha;

    @Column(name = "dataNasc")
    private LocalDate dataNasc;

    @Enumerated(EnumType.STRING)
    @Column(name = "perfil_usu", nullable = false)
    @NotNull(message = "O perfil é obrigatório.")
    private Perfil perfil;

    @Column(name = "telefone_usu")
    private String telefone;

    @Column(name = "endereco_usu")
    private String endereco;
    
    @Column(nullable = false)
    private String salt; 

    public enum Perfil {
        FUNCIONARIO("Funcionário"),
        CLIENTE("Cliente");

        private final String descricao;

        Perfil(String descricao) {
            this.descricao = descricao;
        }

        public String getDescricao() {
            return descricao;
        }
    }
}
