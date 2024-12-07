package br.net.manutencao.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.net.manutencao.model.Funcionario;
import br.net.manutencao.model.Cliente;
import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.repository.SolicitacaoRepository;
import br.net.manutencao.repository.UsuarioRepository;

@Service
public class SolicitacaoService {

    private final SolicitacaoRepository solicitacaoRepository;
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository, UsuarioRepository usuarioRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    // Método para listar solicitações por id_usu (Cliente ou Funcionário)
    @Transactional(readOnly = true)
    public List<Solicitacao> listarSolicitacoesPorUsuario(Long id_usu) {
        // Verifica se o usuário existe
        var usuarioOpt = usuarioRepository.findById(id_usu);
        
        if (!usuarioOpt.isPresent()) {
            throw new IllegalArgumentException("ID de usuário inválido: " + id_usu);
        }

        var usuario = usuarioOpt.get();

        // Verifica o tipo de usuário (CLIENTE ou FUNCIONARIO)
        if (usuario instanceof Cliente) {
            return solicitacaoRepository.findByClienteId(id_usu); // Buscar solicitações do cliente
        } else if (usuario instanceof Funcionario) {
            return solicitacaoRepository.findByFuncionarioId(id_usu); // Buscar solicitações do funcionário
        } else {
            throw new IllegalArgumentException("Tipo de usuário desconhecido para o ID: " + id_usu);
        }
    }

    // Método listar todas as solicitações por data
    public List<Object[]> listarSolicitacoesData() {
        return solicitacaoRepository.findTotalPorData();
    }
}
