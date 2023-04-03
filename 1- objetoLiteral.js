const user = {
    nome: 'Eddie',
    email: 'eddie@email.com',
    nascimento: '16/03/1981',
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()

const exibir = function () {
    console.log(this.nome)
}

//bind é usado para prender a execução de uma função a um contexto específico
const exibirNome = exibir.bind(user)
exibirNome()
exibir()

 