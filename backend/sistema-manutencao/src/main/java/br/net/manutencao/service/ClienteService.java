package br.net.manutencao.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.net.manutencao.model.Cliente;
import br.net.manutencao.repository.ClienteRepository;

import java.security.SecureRandom;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Cliente autocadastrar(Cliente cliente) throws Exception {
        if (clienteRepository.existsByEmail(cliente.getEmail())) {
            throw new Exception("E-mail já cadastrado.");
        }
        if (clienteRepository.existsByCpf(cliente.getCpf())) {
            throw new Exception("CPF já cadastrado.");
        }

        // Gera uma senha aleatória de 4 dígitos
        String senha = gerarSenha();
        String senhaCriptografada = passwordEncoder.encode(senha);
        cliente.setSenha(senhaCriptografada);

        // Salva o cliente
        clienteRepository.save(cliente);

        // Envia o e-mail com a senha
        enviarEmailComSenha(cliente.getEmail(), senha);

        return cliente;
    }

    private String gerarSenha() {
        SecureRandom random = new SecureRandom();
        byte[] bytes = new byte[4];
        random.nextBytes(bytes);
        return String.valueOf(Math.abs(bytes[0]) % 10000);
    }

    private void enviarEmailComSenha(String email, String senha) {
        SimpleMailMessage mensagem = new SimpleMailMessage();
        mensagem.setTo(email);
        mensagem.setSubject("Senha de Acesso");
        mensagem.setText("Bem-vindo ao sistema! Sua senha é: " + senha);
        mailSender.send(mensagem);
    }
}
