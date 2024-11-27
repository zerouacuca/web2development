package br.net.manutencao.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonManagedReference;  // Importação necessária

@Entity
@Data
@Table(name = "td_solicitacao")
public class Solicitacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    // Relacionamento com Categoria
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    @JsonManagedReference  // Indica que a serialização da categoria deve ser controlada pela solicitacao
    private Categoria categoria;

    @Column(nullable = false)
    private LocalDateTime date;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Estado status;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "funcionario_id", nullable = false)
    private Funcionario funcionario;
}
