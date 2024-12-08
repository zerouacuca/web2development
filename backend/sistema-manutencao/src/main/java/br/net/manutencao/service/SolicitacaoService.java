package br.net.manutencao.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.net.manutencao.DTO.SolicitacaoCreateDTO;
import br.net.manutencao.model.Cliente;
import br.net.manutencao.model.EnumStatus;
import br.net.manutencao.model.Solicitacao;
import br.net.manutencao.model.Usuario;
import br.net.manutencao.repository.SolicitacaoRepository;
import br.net.manutencao.repository.ClienteRepository;
import br.net.manutencao.repository.HistoricoSolicitacaoRepository;
import br.net.manutencao.repository.UsuarioRepository;

@Service
public class SolicitacaoService {

    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    FuncionarioService funcionarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private SolicitacaoRepository solicitacaoRepository2;

    private final SolicitacaoRepository solicitacaoRepository;

    public SolicitacaoService(SolicitacaoRepository solicitacaoRepository,
            HistoricoSolicitacaoRepository historicoSolicitacaoRepository) {
        this.solicitacaoRepository = solicitacaoRepository;
    }

    @Transactional(readOnly = true)
    public List<Solicitacao> listarSolicitacoesPorUsuario(Long id) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(id);
        List<Solicitacao> solicitacoes = new ArrayList<>();

        optionalUsuario.ifPresent(usuario -> {
            String perfilNome = usuario.getPerfil().name(); // Obtém o nome do enum como String

            // Se o perfil for CLIENTE, busca as solicitações com cliente_id igual a id
            if (perfilNome.equals("CLIENTE")) {
                solicitacoes.addAll(solicitacaoRepository.findByClienteId(id));
            }
            // Se o perfil for FUNCIONARIO, busca as solicitações com funcionario_id igual a
            // id
            else if (perfilNome.equals("FUNCIONARIO")) {
                solicitacoes.addAll(solicitacaoRepository.findByFuncionarioId(id));
            }
        });
        return solicitacoes; // Retorna a lista de solicitações
    }

    // Método listar todos as solicitacoes
    public List<Object[]> listarSolicitacoesData() {
        return solicitacaoRepository2.findTotalPorData();

    }

    @Transactional
    public void createSolicitacao(SolicitacaoCreateDTO solicitacaoDTO) {
        Solicitacao novaSolicitacao = new Solicitacao();
        novaSolicitacao.setDescription(solicitacaoDTO.getDescription());
        novaSolicitacao.setCategoria(solicitacaoDTO.getCategoria());
        novaSolicitacao.setDefeito(solicitacaoDTO.getDefeito());
        novaSolicitacao.setPreco(-1);
        novaSolicitacao.setDate(LocalDateTime.now());
        novaSolicitacao.setStatus(EnumStatus.ABERTA);
        Optional<Cliente> clienteOpt = clienteRepository.findById(solicitacaoDTO.getIdCliente());
        if (clienteOpt.isPresent()) {
            novaSolicitacao.setCliente(clienteOpt.get());
        } else {
            throw new RuntimeException("Cliente não encontrado com o ID fornecido.");
        }
        novaSolicitacao.setFuncionario(funcionarioService.getFuncionarioAleatorio());
        solicitacaoRepository.save(novaSolicitacao);
    }
}
