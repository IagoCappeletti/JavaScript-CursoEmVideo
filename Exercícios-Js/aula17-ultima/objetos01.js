let amigo = {nome: 'josé',
sexo: 'M',
idade: '21',
anos(P=0) {
    console.log('FICOU MAIS VELHO!')
    this.idade += P
}}
amigo.anos(4)
console.log(`${amigo.nome} tem a idade de ${amigo.idade} e é do sexo ${amigo.sexo}.`)