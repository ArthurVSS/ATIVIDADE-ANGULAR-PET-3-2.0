export class Carteira{
    id: number
    valor: number
    caixa: string
    descricao: string
    data_valor: string
    nome: string
    telefone: number
    quantidade: number
    
    constructor(id?: number, valor?: number, caixa?:string, descricao?: string, data_valor?: string, nome?: string
, telefone?: number, quantidade?: number){
        this.id = id
        this.valor = valor
        this.caixa = caixa
        this.descricao = descricao
        this.data_valor = data_valor
        this.nome = nome
        this.telefone = telefone
        this.quantidade = quantidade
    }
}