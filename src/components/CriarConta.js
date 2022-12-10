import React from 'react'
import style from "./NavBar.module.css"
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import NavBar from './NavBar'


export default function CriarConta(props) {

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [cpf, setCpf] = useState()
  const [senha, setSenha] = useState()
  const [senha2, setSenha2] = useState()
  const [razaoSocial, setRazaoSocial] = useState()

  // const pegarDados = (e) => {

  //   const dados = {
  //     nome: props.informacoes.push(e.target.elements.nome.value),
  //     cpf: props.informacoes.push(e.target.elements.cpf.value),
  //     senha: props.informacoes.push(e.target.elements.senha.value),
  //     razaoSocial: props.informacoes.push(e.target.elements.razaoSocial.value),
  //   }
  //   console.log(nome,cpf,senha)
  // }

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
       nome: props.informacoes.push(nome),
          email: props.informacoes.push(email),
            cpf: props.informacoes.push(cpf),
         senha: props.informacoes.push(senha),
         razaoSocial: props.informacoes.push(razaoSocial),   
    };
   
    console.log(data)
    console.log(nome)

    console.log(props.informacoes)
}
    // let nomes = props.dados.push(nome)
    // let emails = props.dados.push(email)
    // let cpfs = props.dados.push(cpf)
    // let senhas = props.dados.push(senha)
    // let razoesSociais = props.dados.push(razaoSocial)

    // console.log(nome, email, cpf, senha)


    // console.log(nomes,emails,cpfs,senhas,razoesSociais)
  

  // console.log(nome,email,senha, senha2, razaoSocial)

//   const data= (e) => {
//     localStorage.setItem('teste')
//  };


  return (
    <div>

    <NavBar />
        <br/><br/>
            <h1>Cadastre-se</h1>
               Nome:  <input type="text" onChange={(e)=> setNome (e.target.value)} name="nome" placeholder="Digite seu nome" /> <br/>
             Email:  <input type="email" onChange={(e)=> setEmail (e.target.value)} name="email" placeholder="Digite seu Email" /><br/>
           CPF/CNPJ  <input type="text" onChange={(e)=> setCpf (e.target.value)} name="cpf" placeholder="Digite seu CPF/CNPJS" /><br/>
         Senha:  <input type="password" onChange={(e)=> setSenha (e.target.value)} name="senha" placeholder="Digite seu Senha" /><br/>
      Confirmar:  <input type="password" onChange={(e)=> setSenha2 (e.target.value)} name="senha2" placeholder=" Confirme a senha" /><br/>
  Razão Social  <input type="text" onChange={(e)=> setRazaoSocial (e.target.value)} placeholder="Digite seu Razão Social" /><br/><br/><br/>

    <NavLink to="/Login" className={style.detalhesLink} onClick={onSubmit} >Salvar</NavLink> {''}
        {/* Resetar coloquei o NavLink somente para manter o padrão de estilo mas não irá levar para nenhuma página */}
      <NavLink className={style.detalhesLink}>Resetar</NavLink> {''}
    <NavLink to="/Login" className={style.detalhesLink}>Voltar</NavLink> {''}

    </div>
  )
}
