package br.net.manutencao.controller;

import jakarta.persistence.*;
import java.time.LocalDateTime;



@Entity
@Table(name = "solicitacoes")
public class Solicitacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String cliente;

    @Column(nullable = false)
    private String descricao;

    private String estado; //  "ABERTA", "ORÇADA" e tals

    private LocalDateTime dataHoraAbertura;
    private LocalDateTime dataHoraOrcamento;

    private Double valorOrcamento;

    @Column(name = "funcionario_orcamento")
    private String funcionarioOrcamento;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public LocalDateTime getDataHoraAbertura() {
        return dataHoraAbertura;
    }

    public void setDataHoraAbertura(LocalDateTime dataHoraAbertura) {
        this.dataHoraAbertura = dataHoraAbertura;
    }

    public LocalDateTime getDataHoraOrcamento() {
        return dataHoraOrcamento;
    }

    public void setDataHoraOrcamento(LocalDateTime dataHoraOrcamento) {
        this.dataHoraOrcamento = dataHoraOrcamento;
    }

    public Double getValorOrcamento() {
        return valorOrcamento;
    }

    public void setValorOrcamento(Double valorOrcamento) {
        this.valorOrcamento = valorOrcamento;
    }

    public String getFuncionarioOrcamento() {
        return funcionarioOrcamento;
    }

    public void setFuncionarioOrcamento(String funcionarioOrcamento) {
        this.funcionarioOrcamento = funcionarioOrcamento;
    }

    // toString para facilitar o debug
    @Override
    public String toString() {
        return "Solicitacao{" +
                "id=" + id +
                ", cliente='" + cliente + '\'' +
                ", descricao='" + descricao + '\'' +
                ", estado='" + estado + '\'' +
                ", dataHoraAbertura=" + dataHoraAbertura +
                ", dataHoraOrcamento=" + dataHoraOrcamento +
                ", valorOrcamento=" + valorOrcamento +
                ", funcionarioOrcamento='" + funcionarioOrcamento + '\'' +
                '}';
    }

    private LocalDateTime dataHoraFinalizacao; 
    private String funcionarioFinalizacao; 

    public LocalDateTime getDataHoraFinalizacao() {
    return dataHoraFinalizacao;
    }

    public void setDataHoraFinalizacao(LocalDateTime dataHoraFinalizacao) {
    this.dataHoraFinalizacao = dataHoraFinalizacao;
    }

    public String getFuncionarioFinalizacao() {
    return funcionarioFinalizacao;
    }

    public void setFuncionarioFinalizacao(String funcionarioFinalizacao) {
    this.funcionarioFinalizacao = funcionarioFinalizacao;
    }
}
