export class Funcionario {
    constructor(
        public id: number = 0,
        public email: string = "",
        public nome: string = "",
        public nascimento: Date = new Date(0),
        public senha: string = "",
    ) {
    }
}