export class Funcionario {
    constructor(
        // dados pessoais
        public id: number = 0,
        public cpf: string = "",
        public nome: string = "",
        public nascimento: Date = new Date(0),
        public email: string = "",
        public telefone: number = 0,
        // endereço
        public cep: string = "",
        public estado: string = "",
        public cidade: string = "",
        public bairro: string = "",
        public rua: string = "",
        public numero: string = "",
        public complemento: string = ""
    ) {
    }
}