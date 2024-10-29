package br.net.manutencao.service;

import org.springframework.web.client.RestTemplate;

public class ViaCepService {
    public Endereco buscarEnderecoPorCep(String cep){
        String url = "https://viacep.com.br/ws/" + cep + "/json/";
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Endereco.class);
    }
    class Endereco{
        private String rua;
        private String UF;
        private String bairro;

        public String getUF(){
            return UF;
        }
        public String getRua(){
            return rua;
        }
        public String getBairro(){
            return bairro;
        }
        void setUF(String UF){
            this.UF = UF;
        }
        void setRua(String rua){
            this.rua = rua;
        }
        void setBairro(String bairro){
            this.bairro = bairro;
        }
    }
}
