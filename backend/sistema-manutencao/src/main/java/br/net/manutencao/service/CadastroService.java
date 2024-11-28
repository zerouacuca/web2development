package br.net.manutencao.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import br.net.manutencao.HashUtil;
import br.net.manutencao.model.Usuario;
import br.net.manutencao.repository.CadastroRepository;

import java.security.SecureRandom;
import java.util.Base64;

@Service
public class CadastroService {

    @Autowired
    private CadastroRepository cadastroRepository;

    @Autowired
    private JavaMailSender mailSender;

    // @Autowired
    // private PasswordEncoder passwordEncoder;

    public Usuario autocadastrar(Usuario usuario) throws Exception {

        if (cadastroRepository.existsByEmail(usuario.getEmail())) {
            throw new IllegalArgumentException("E-mail já cadastrado.");
        }
    
        if (cadastroRepository.existsByCpf(usuario.getCpf())) {
            throw new IllegalArgumentException("CPF já cadastrado.");
        }
    
        // Gera uma senha aleatória de 4 dígitos
        String senha = gerarSenha();
        String salt = HashUtil.gerarSalt();
        String senhaHash = HashUtil.hashSenhaComSalt(senha, salt);

        usuario.setSenha(senhaHash);
        usuario.setSalt(salt);
    
        cadastroRepository.save(usuario);
    
        enviarEmailComSenha(usuario.getEmail(), senha);
    
        return usuario;
    }
    

    private String gerarSenha() {
        SecureRandom random = new SecureRandom();
        int senha = random.nextInt(10000);  // 0 e 9999
        return String.format("%04d", Math.abs(senha));  // Formata para ter 4 dígitos
    }

    public String gerarSalt() {
        byte[] salt = new byte[16];
        SecureRandom secureRandom = new SecureRandom();
        secureRandom.nextBytes(salt);
        return Base64.getEncoder().encodeToString(salt); // Converte o salt para Base64
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
