export interface Solicitacao {
    id: number;
    description: string;
    preco: number;
    categoria: {
      nome: string;
    };
    date: Date;
    status: string;
    cliente: {
        nome: string;
    };
    funcionario:{
        nome: string;
    }
  }
  