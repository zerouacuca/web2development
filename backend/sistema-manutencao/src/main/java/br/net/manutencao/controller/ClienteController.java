package br.net.manutencao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.net.manutencao.dto.ClienteDTO;
import br.net.manutencao.model.Cliente;
import br.net.manutencao.service.ClienteService;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @PostMapping("/autocadastro")
    public ResponseEntity<?> registrarCliente(@RequestBody ClienteDTO clienteDTO){
        try {
            Cliente cliente = clienteService.registrarCliente(clienteDTO);
            return ResponseEntity.ok("Cadastro Realizado com sucesso! Não esqueça de verificar seu email para adquirir a senha!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }    
}
