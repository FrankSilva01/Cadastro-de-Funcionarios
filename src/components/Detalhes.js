import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import NavBar from './NavBar'

import style from "./NavBar.module.css"


export default function Detalhes(props) {

  return (
    <div>

    <NavBar />
       <br /><br />
    <h1>Detalhes</h1>

    {/* Props.usuario esta vindo do componente Cadastro.js que popula o array usuario no 
       App.js com os valores digitados no input para passar as informações por props */}
    <h4>Nome:<p id="nome">{props.usuario[0]}</p></h4>

       <h4>Cargo:</h4>
    <p id="cargo" >{props.usuario[1]}</p>

      <h4>Setor:</h4>
    <p id="setor">{props.usuario[2]}</p>

    <h4>Salário:</h4>
    <p id="salario" >R$: {props.usuario[3]}</p>

    <h4>Status:</h4>
    <p style={{color: 'green' }} >Ativo</p>

     <NavLink to="/consulta" className={style.detalhesLink}>Voltar</NavLink>   {''}
      <NavLink to="/editardadosfuncionario" className={style.detalhesLink}>Editar</NavLink>   {''}
     <NavLink className={style.detalhesLink} > Excluir</NavLink>   {''}
    </div>
  )
}
