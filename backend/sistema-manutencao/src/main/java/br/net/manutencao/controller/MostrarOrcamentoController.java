// package br.net.manutencao.controller;

// import br.net.manutencao.model.Orcamento;
// import br.net.manutencao.service.OrcamentoService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/orcamento")
// public class MostrarOrcamentoController {

//     @Autowired
//     private OrcamentoService orcamentoService;

//     @GetMapping("/{id}")
//     public Orcamento getOrcamento(@PathVariable Long id) {
//         return orcamentoService.buscarOrcamentoPorId(id);
//     }
// }