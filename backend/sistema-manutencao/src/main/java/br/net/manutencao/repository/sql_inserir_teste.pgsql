-- -- Inserir um usuário genérico na tabela td_usuario
-- -- INSERT INTO td_usuario (id_usu, nome_usu, login_usu, senha_usu, perfil_usu, email_usu, telefone_usu, endereco_usu, cpf_usu) 
-- VALUES 
-- (1, 'Admin User', 'admin', 'admin123', 'ADMIN', 'admin@example.com', '123456789', 'Rua Admin, 123', '111.111.111-11'),
-- (2, 'Cliente User', 'cliente', 'cliente123', 'CLIENTE', 'cliente@example.com', '987654321', 'Rua Cliente, 456', '222.222.222-22'),
-- (3, 'Funcionario User', 'funcionario', 'funcionario123', 'FUNCIONARIO', 'funcionario@example.com', '456123789', 'Rua Funcionario, 789', '333.333.333-33');

-- -- Inserir um admin específico na tabela td_admin
-- INSERT INTO td_admin (id_usu) 
-- VALUES (1);

-- -- Inserir um cliente específico na tabela td_cliente
-- INSERT INTO td_cliente (id_usu) 
-- VALUES (2);

-- -- Inserir um funcionário específico na tabela td_funcionario
-- INSERT INTO td_funcionario (id_usu, datanasc_func) 
-- VALUES (3, '1990-01-01');
