package br.net.manutencao.DTO;

import java.sql.Date;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data

@NoArgsConstructor
public class SolicitacaoListDTO {

    private Long id;
    private Date data;
    private float valor;

    public SolicitacaoListDTO(Date data, float valor) {
        this.data = data;
        this.valor = valor;
    }


    
}
