package br.net.manutencao.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.net.manutencao.model.Cliente;
import br.net.manutencao.repository.CadastroRepository;

import java.security.SecureRandom;

@Service
public class CadastroService {

    @Autowired
    private CadastroRepository cadastroRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Cliente autocadastrar(Cliente cliente) throws Exception {
        // Verifica se o email ja esta cadastrado
        if (cadastroRepository.existsByEmail(cliente.getEmail())) {
            throw new IllegalArgumentException("E-mail já cadastrado.");
        }

        // Verifica se o CPF ja existe no cadastro
        if (cadastroRepository.existsByCpf(cliente.getCpf())) {
            throw new IllegalArgumentException("CPF já cadastrado.");
        }

        // Gera uma senha aleatória de 4 dígitos
        String senha = gerarSenha();
        String senhaCriptografada = passwordEncoder.encode(senha);
        cliente.setSenha(senhaCriptografada);

        // Salva o cliente no repository
        cadastroRepository.save(cliente);

        // Envia o email com a senha gerada
        enviarEmailComSenha(cliente.getEmail(), senha);

        return cliente;
    }

    // Gera senha aleatória de 4 dígitos
    private String gerarSenha() {
        SecureRandom random = new SecureRandom();
        int senha = random.nextInt(10000);  // Gera um número entre 0 e 9999
        return String.format("%04d", Math.abs(senha));  // Formata para ter 4 dígitos
    }

    // Envia o email com a senha gerada
    private void enviarEmailComSenha(String email, String senha) {
        SimpleMailMessage mensagem = new SimpleMailMessage();
        mensagem.setTo(email);
        mensagem.setSubject("Senha de Acesso");
        mensagem.setText("Bem-vindo ao sistema! Sua senha é: " + senha);
        mailSender.send(mensagem);
    }
}
