package br.net.manutencao.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.net.manutencao.model.Cliente;
import br.net.manutencao.model.Funcionario;
import br.net.manutencao.model.Usuario;
import br.net.manutencao.service.ClienteService;
import br.net.manutencao.service.FuncionarioService;
import jakarta.validation.Valid;

import java.time.LocalDate;

@RestController
@RequestMapping("/cadastro")
@CrossOrigin(origins = "http://localhost:4200")
public class CadastroController {

    @Autowired
    private ClienteService cadastroService;

    @Autowired
    private FuncionarioService funcionarioService;
    
   

    
}
