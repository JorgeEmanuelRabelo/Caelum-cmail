export class User {
    nome = '';
    username = '';
    password = '';
    telefone = '';
    avatar = '';

    constructor({ nome, username, senha, telefone, avatar }) {
        this.nome = nome;
        this.username = username;
        this.password = senha;
        this.telefone = telefone;
        this.avatar = avatar;
    }
}