const perfil = {
    foto: 'foto.jpeg',
    nome: 'Paulo Diego',
    sobrenome: 'Cassiano Neves',
    objetivo: 'Desenvolvedor Front End',
    telefone: '82996207887',
    urlGithub: 'https://github.com/pdiegoneves',
    urlLinkedin: 'https://www.linkedin.com/in/pdiegoneves/',
    emailPrincipal: 'pdiegoneves@gmail.com',
    emailSecundario: 'diego.neves@outlook.com.br'
}


const doc = document
const elNome = doc.querySelector('.js-nome')
const elObjetivo = doc.querySelector('.js-objetivo')

elNome.innerText = `${perfil.nome} ${perfil.sobrenome}`
elObjetivo.innerText = `${perfil.objetivo}`