-- Inserir categorias 
INSERT INTO td_categoria (nome) VALUES
('Notebook'),
('Desktop'),
('Impressora'),
('Mouse'),
('Teclado')

/*---------INSERIR FUNCIONARIOS PRIMEIRO------------*/
-- Funcionário: login: maria@email.com, senha: 7513
INSERT INTO td_usuario(email_usu, nome_usu, perfil_usu, salt, senha_usu)
VALUES ('maria@email.com', 'Maria', 'FUNCIONARIO','KESsYPO6fKzNgBhMAVlH6w==', 'Z00PeqRod8CGT4bAp/hiP1sAqMWaFx3W0vzYb1mFdr8=');

INSERT INTO td_funcionario(id_usu, data_nasc)
VALUES (1, '1993-05-16');

-- Funcionário: login: mario@email.com, senha: 7849
INSERT INTO td_usuario(email_usu, nome_usu, perfil_usu, salt, senha_usu)
VALUES ('mario@email.com', 'Mário', 'FUNCIONARIO', 'Q/zsqM6xOjzKBYkKq3Im7Q==', '6guzLB8JfMRRym97ks21xMnAxTO5M8Dvwic9ebRmOaQ=');

INSERT INTO td_funcionario(id_usu, data_nasc)
VALUES (2, '1990-05-15');

/*---------INSERIR CLIENTES ----------------------*/
INSERT INTO td_usuario(email_usu, nome_usu, perfil_usu, salt, senha_usu)
VALUES 
  ('joao@email.com', 'João', 'CLIENTE', 'Q/zsqM6xOjzKBYkKq3Im7Q==', '6guzLB8JfMRRym97ks21xMnAxTO5M8Dvwic9ebRmOaQ='),
  ('jose@email.com', 'José', 'CLIENTE', 'Q/zsqM6xOjzKBYkKq3Im7Q==', '6guzLB8JfMRRym97ks21xMnAxTO5M8Dvwic9ebRmOaQ='),
  ('joana@email.com', 'Joana', 'CLIENTE', 'Q/zsqM6xOjzKBYkKq3Im7Q==', '6guzLB8JfMRRym97ks21xMnAxTO5M8Dvwic9ebRmOaQ='),
  ('joaquina@email.com', 'Joaquina', 'CLIENTE', 'Q/zsqM6xOjzKBYkKq3Im7Q==', '6guzLB8JfMRRym97ks21xMnAxTO5M8Dvwic9ebRmOaQ=');

INSERT INTO td_cliente(
  bairro_usu, cep_usu, complemento_usu, cpf_usu, estado_usu, 
  localidade_usu, numero_usu, rua_usu, telefone_usu, id_usu
)
VALUES
  ('Centro', '12345-678', 'Apto 101', '123.456.789-00', 'SP', 
   'São Paulo', '100', 'Rua Principal', '(11) 91234-5678', 3),
  ('Jardim das Flores', '23456-789', 'Casa', '234.567.890-11', 'RJ', 
   'Rio de Janeiro', '200', 'Rua das Rosas', '(21) 92345-6789', 4),
  ('Vila Nova', '34567-890', 'Bloco B, Apto 202', '345.678.901-22', 'MG', 
   'Belo Horizonte', '300', 'Avenida das Palmeiras', '(31) 93456-7890', 5),
  ('Bairro Alto', '45678-901', 'Condomínio Sol, Apto 303', '456.789.012-33', 'PR', 
   'Curitiba', '400', 'Rua do Sol', '(41) 94567-8901', 6);

-- Inserindo 20 solicitações
INSERT INTO td_solicitacao (date, description, preco, status, categoria_id, cliente_id, funcionario_id) VALUES
-- Solicitações associadas a diferentes categorias, clientes e funcionários
('2024-11-01 10:00:00', 'Reparo no teclado', 150.0, 'ABERTA', 5, 3, 1),
('2024-11-01 11:30:00', 'Troca de mouse', 80.0, 'REDIRECIONADA', 4, 4, 2),
('2024-11-02 09:00:00', 'Manutenção em notebook', 300.0, 'ORCADA', 1, 5, 1),
('2024-11-02 15:00:00', 'Reparo em impressora', 250.0, 'APROVADA', 3, 6, 2),
('2024-11-03 08:00:00', 'Montagem de desktop', 600.0, 'FINALIZADA', 2, 3, 1),
('2024-11-03 10:30:00', 'Substituição de peça em notebook', 400.0, 'PAGA', 1, 4, 1),
('2024-11-04 14:00:00', 'Configuração de impressora', 120.0, 'REJEITADA', 3, 5, 2),
('2024-11-05 13:00:00', 'Atualização de sistema', 100.0, 'ARRUMADA', 1, 6, 2),
('2024-11-05 16:00:00', 'Reparo no mouse', 50.0, 'ABERTA', 4, 3, 1),
('2024-11-06 09:00:00', 'Troca de fonte no desktop', 220.0, 'ORCADA', 2, 4, 1),
('2024-11-06 14:30:00', 'Limpeza de notebook', 90.0, 'APROVADA', 1, 5, 1),
('2024-11-07 08:00:00', 'Instalação de teclado gamer', 200.0, 'REDIRECIONADA', 5, 6, 2),
('2024-11-07 11:00:00', 'Configuração de rede', 180.0, 'FINALIZADA', 3, 3, 1),
('2024-11-08 09:30:00', 'Atualização de driver em impressora', 70.0, 'PAGA', 3, 4, 2),
('2024-11-08 14:30:00', 'Troca de teclado', 170.0, 'ABERTA', 5, 5, 2),
('2024-11-09 08:30:00', 'Upgrade de memória em notebook', 450.0, 'ORCADA', 1, 6, 1),
('2024-11-09 12:00:00', 'Reparo de fonte no desktop', 250.0, 'APROVADA', 2, 3, 2),
('2024-11-10 09:00:00', 'Substituição de HD em notebook', 500.0, 'REJEITADA', 1, 4, 1),
('2024-11-10 14:30:00', 'Configuração de teclado sem fio', 130.0, 'ARRUMADA', 5, 5, 1),
('2024-11-11 10:00:00', 'Reparo em impressora multifuncional', 300.0, 'FINALIZADA', 3, 6, 2);

-- Histórico de alterações para as solicitações
INSERT INTO td_historico_solicitacao (data_hora, estado, solicitacao_id) VALUES
-- Históricos para a solicitação 1
('2024-11-01 10:30:00', 'ORCADA', 1),
('2024-11-02 09:00:00', 'APROVADA', 1),
('2024-11-02 14:00:00', 'FINALIZADA', 1),

-- Históricos para a solicitação 2
('2024-11-01 12:00:00', 'APROVADA', 2),
('2024-11-02 10:00:00', 'ARRUMADA', 2),

-- Históricos para a solicitação 3
('2024-11-02 10:30:00', 'REDIRECIONADA', 3),
('2024-11-03 11:00:00', 'APROVADA', 3),

-- Históricos para outras solicitações
('2024-11-03 15:00:00', 'FINALIZADA', 4),
('2024-11-04 09:00:00', 'PAGA', 5),
('2024-11-04 15:30:00', 'REJEITADA', 6),
('2024-11-05 08:00:00', 'ABERTA', 7),
('2024-11-05 14:30:00', 'FINALIZADA', 8),
('2024-11-06 11:00:00', 'ARRUMADA', 9),
('2024-11-06 15:30:00', 'FINALIZADA', 10),
('2024-11-07 12:00:00', 'PAGA', 11),
('2024-11-07 15:30:00', 'FINALIZADA', 12),
('2024-11-08 10:00:00', 'REDIRECIONADA', 13),
('2024-11-08 16:30:00', 'FINALIZADA', 14),
('2024-11-09 11:00:00', 'APROVADA', 15),
('2024-11-09 15:30:00', 'FINALIZADA', 16),
('2024-11-10 10:30:00', 'ORCADA', 17),
('2024-11-10 15:30:00', 'FINALIZADA', 18),
('2024-11-11 12:30:00', 'APROVADA', 19),
('2024-11-11 16:30:00', 'FINALIZADA', 20);