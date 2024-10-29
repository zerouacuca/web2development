package br.net.manutencao.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.net.manutencao.dto.ClienteDTO;
import br.net.manutencao.model.Cliente;
import br.net.manutencao.repository.ClienteRepository;
import br.net.manutencao.service.ViaCepService.Endereco;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ViaCepService viaCepService;

    public Cliente registrarCliente(ClienteDTO clienteDTO){

        if(clienteRepository.existsByCpf(clienteDTO.getCpf()) || clienteRepository.existsByEmail(clienteDTO.getEmail())){
            throw new IllegalArgumentException("Cliente já cadastrado");
        }

        Cliente cliente = new Cliente();
        cliente.setCpf(clienteDTO.getCpf());
        cliente.setNome(clienteDTO.getNome());
        cliente.setEmail(clienteDTO.getEmail());
        cliente.setTelefone(clienteDTO.getTelefone());

        Endereco endereco = viaCepService.buscarEnderecoPorCep(clienteDTO.getCep());
        if(endereco != null){
            cliente.setBairro(endereco.getBairro());
            cliente.setRua(endereco.getRua());
            cliente.setUF(endereco.getUF());
            cliente.setCep(clienteDTO.getCep());
        }

        String senhaGerada = gerarSenhaAleatoria();
        cliente.setSenha(senhaGerada);

        emailService.enviarEmail(cliente.getEmail(), "Cadastro no sistema realizado!", "Sua senha é: " + senhaGerada);

        return clienteRepository.save(cliente);
    }
    private String gerarSenhaAleatoria(){
        Random random = new Random();
        int numero = random.nextInt(10000);
        return String.format("%04d", numero);
    }
}
