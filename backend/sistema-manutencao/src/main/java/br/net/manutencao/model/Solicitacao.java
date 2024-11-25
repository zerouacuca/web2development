// package br.net.manutencao.model;
// import jakarta.persistence.*;
// import java.time.LocalDateTime;
// import java.util.List;
// import lombok.Data;

// @Entity
// @Data
// public class Solicitacao {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Column(nullable = false)
//     private String descricaoEquipamento;

//     @ManyToOne
//     @JoinColumn(name = "categoria_id", nullable = false)
//     private Categoria categoria;

//     @Column(nullable = false)
//     private String descricaoDefeito;

//     @Column(nullable = false)
//     private LocalDateTime dataHora;

//     @Enumerated(EnumType.STRING)
//     @Column(nullable = false)
//     private Estado estado;

//     @ManyToOne
//     @JoinColumn(name = "cliente_id", nullable = false)
//     private Cliente cliente;

//     @OneToMany(mappedBy = "solicitacao", cascade = CascadeType.ALL)
//     private List<HistoricoEstado> historicoEstados;

// }
