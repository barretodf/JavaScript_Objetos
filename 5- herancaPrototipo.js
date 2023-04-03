const user = {
    nome: 'Juliana',
    email: 'eddie@email.com',
    nascimento: '16/03/1981',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
const admin = {
    nome: 'Mariana',
    email: 'm@email.com',
    nascimento: '13/06/1999',
    role: 'admin',
    ativo: true,
    criarCurso() {
        console.log('curso criado')
    }
}

//Criando o protótipo
//Leva dois parâmetros, 1 o objeto que vai herdar as propriedades. 2 objeto que vai ceder 
Object.setPrototypeOf(admin, user) 
admin.criarCurso()
admin.exibirInfos()