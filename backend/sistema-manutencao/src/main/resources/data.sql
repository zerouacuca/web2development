-- Inserir categorias 
INSERT INTO td_categoria (nome) VALUES  -- Funciona
('Manutenção de Hardware'),
('Manutenção de Software'),
('Impressoras'),
('Redes de Computadores'),
('Sistemas Operacionais'),
('Segurança de TI'),
('Suporte Técnico'),
('Backup e Recuperação de Dados'),
('Instalação de Equipamentos'),
('Monitoramento de Sistemas')
ON CONFLICT (nome) DO NOTHING;

/*---------INSERIR FUNCIONARIOS PRIMEIRO------------*/
-- Funcionário: login: maria@gmail.com, senha: 7513
INSERT INTO td_usuario(email_usu, nome_usu, perfil_usu, salt, senha_usu)
VALUES ('maria@email.com', 'Maria', 'FUNCIONARIO','KESsYPO6fKzNgBhMAVlH6w==', 'Z00PeqRod8CGT4bAp/hiP1sAqMWaFx3W0vzYb1mFdr8=');

INSERT INTO td_funcionario(id_usu, data_nasc)
VALUES (1, '1993-05-16');

-- Funcionário: login: mario@gmail.com, senha: 7849
INSERT INTO td_usuario(email_usu, nome_usu, perfil_usu, salt, senha_usu)
VALUES ('mario@email.com', 'Mário', 'FUNCIONARIO', 'Q/zsqM6xOjzKBYkKq3Im7Q==', '6guzLB8JfMRRym97ks21xMnAxTO5M8Dvwic9ebRmOaQ=');

INSERT INTO td_funcionario(id_usu, data_nasc)
VALUES (2, '1990-05-15');
/*--------------------------------------------------*/

/* -- Inserir usuários na tabela 'usuario'
-- Para os clientes
INSERT INTO td_usuario (id_usu, email_usu, nome_usu, senha_usu, perfil_usu, salt)
VALUES 
(1, 'joao.silva@cliente.com', 'João Silva', 'senha_encriptada_1', 'cliente', 'salt_joao_silva'),
(2, 'maria.oliveira@cliente.com', 'Maria Oliveira', 'senha_encriptada_2', 'cliente', 'salt_maria_oliveira'),
(3, 'carlos.pereira@cliente.com', 'Carlos Pereira', 'senha_encriptada_3', 'cliente', 'salt_carlos_pereira'),
(4, 'luana.martins@cliente.com', 'Luana Martins', 'senha_encriptada_4', 'cliente', 'salt_luana_martins'),
(5, 'joana.souza@cliente.com', 'Joana Souza', 'senha_encriptada_5', 'cliente', 'salt_joana_souza');



-- Inserir clientes
INSERT INTO td_cliente (cpf_usu, telefone_usu, cep_usu, rua_usu, bairro_usu, localidade_usu, estado_usu, numero_usu, complemento_usu, id_usu) VALUES
('12345678901', '11987654321', '12345000', 'Rua A', 'Bairro X', 'Cidade Y', 'SP', '123', 'Apto 101', 1),
('98765432100', '11987654322', '12346000', 'Rua B', 'Bairro Z', 'Cidade W', 'RJ', '456', 'Casa 2', 2),
('12398765432', '11987654323', '12347000', 'Rua C', 'Bairro Y', 'Cidade Z', 'MG', '789', 'Apto 202', 3),
('98712365498', '11987654324', '12348000', 'Rua D', 'Bairro W', 'Cidade T', 'SP', '101', 'Casa 3', 4),
('45678912345', '11987654325', '12349000', 'Rua E', 'Bairro V', 'Cidade U', 'SP', '202', 'Apto 303', 5);



-- Inserir solicitações
INSERT INTO td_solicitacao (description, categoria_id, date, status, cliente_id, funcionario_id) VALUES
('Manutenção no computador de mesa', 1, '01/11/2024 08:00:00', 'ABERTA', 1, 1),  -- Manutenção de Hardware
('Instalação de software antivírus', 2, '01/11/2024 09:00:00', 'ORÇADA', 2, 2),  -- Manutenção de Software
('Troca de cartucho de impressora', 3, '02/11/2024 10:00:00', 'REJEITADA', 3, 3),  -- Impressoras
('Configuração de rede Wi-Fi', 4, '02/11/2024 11:00:00', 'ABERTA', 4, 1),  -- Redes de Computadores
('Reinstalação de sistema operacional', 5, '03/11/2024 12:00:00', 'APROVADA', 5, 2),  -- Sistemas Operacionais
('Reparo na impressora jato de tinta', 6, '03/11/2024 13:00:00', 'ABERTA', 1, 3),  -- Impressoras
('Suporte técnico remoto', 7, '04/11/2024 14:00:00', 'EM ANDAMENTO', 2, 1),  -- Suporte Técnico
('Instalação de câmeras de segurança para TI', 8, '04/11/2024 15:00:00', 'CONCLUÍDO', 3, 2),  -- Segurança de TI
('Instalação de equipamento de backup', 9, '05/11/2024 16:00:00', 'ABERTA', 4, 3),  -- Backup e Recuperação de Dados
('Monitoramento de servidores', 10, '05/11/2024 17:00:00', 'CONCLUÍDO', 5, 1),  -- Monitoramento de Sistemas
('Instalação de impressora nova', 3, '06/11/2024 08:00:00', 'EM ANDAMENTO', 1, 2),  -- Impressoras
('Configuração de firewall para rede interna', 4, '06/11/2024 09:00:00', 'CONCLUÍDO', 2, 3),  -- Redes de Computadores
('Atualização de sistema operacional', 5, '07/11/2024 10:00:00', 'ABERTA', 3, 1),  -- Sistemas Operacionais
('Reparo de monitor de computador', 1, '07/11/2024 11:00:00', 'EM ANDAMENTO', 4, 2),  -- Manutenção de Hardware
('Instalação de novo servidor', 9, '08/11/2024 12:00:00', 'ABERTA', 5, 3),  -- Backup e Recuperação de Dados
('Troca de peças de impressora', 3, '08/11/2024 13:00:00', 'CONCLUÍDO', 1, 1),  -- Impressoras
('Reparo em roteador de rede', 4, '09/11/2024 14:00:00', 'ABERTA', 2, 2),  -- Redes de Computadores
('Instalação de software de monitoramento de sistema', 2, '09/11/2024 15:00:00', 'EM ANDAMENTO', 3, 3),  -- Manutenção de Software
('Reparo de impressora laser', 3, '10/11/2024 16:00:00', 'ABERTA', 4, 1),  -- Impressoras
('Atualização de sistema de segurança', 8, '10/11/2024 17:00:00', 'CONCLUÍDO', 5, 2);  -- Segurança de TI


-- Inserir históricos de solicitações
INSERT INTO td_historico_solicitacao (solicitacao_id, estado, dataHora) VALUES
(1, 'ABERTA', '01/11/2024 08:00:00'),
(2, 'ORÇADA', '01/11/2024 09:00:00'),
(3, 'REJEITADA', '02/11/2024 10:00:00'),
(4, 'ABERTA', '02/11/2024 11:00:00'),
(5, 'APROVADA', '03/11/2024 12:00:00'),
(6, 'ABERTA', '03/11/2024 13:00:00'),
(7, 'EM ANDAMENTO', '04/11/2024 14:00:00'),
(8, 'CONCLUÍDO', '04/11/2024 15:00:00'),
(9, 'ABERTA', '05/11/2024 16:00:00'),
(10, 'CONCLUÍDO', '05/11/2024 17:00:00'),
(11, 'EM ANDAMENTO', '06/11/2024 08:00:00'),
(12, 'CONCLUÍDO', '06/11/2024 09:00:00'),
(13, 'ABERTA', '07/11/2024 10:00:00'),
(14, 'EM ANDAMENTO', '07/11/2024 11:00:00'),
(15, 'ABERTA', '08/11/2024 12:00:00'),
(16, 'CONCLUÍDO', '08/11/2024 13:00:00'),
(17, 'ABERTA', '09/11/2024 14:00:00'),
(18, 'EM ANDAMENTO', '09/11/2024 15:00:00'),
(19, 'ABERTA', '10/11/2024 16:00:00'),
(20, 'CONCLUÍDO', '10/11/2024 17:00:00'); */
