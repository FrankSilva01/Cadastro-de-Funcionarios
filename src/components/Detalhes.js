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

    <p id="cargo" ><strong>Cargo:<strong/> {props.usuario[1]}</p>

    <p id="setor" ><strong>Setor:<strong/>{props.usuario[2]}</p>

    <p id="salario" ><strong> Salário <strong/> R$: {props.usuario[3]}</p>

    <p style={{color: 'green' }} ><strong> Status:<strong/>  Ativo</p>

     <NavLink to="/consulta" className={style.detalhesLink}>Voltar</NavLink>   {''}
      <NavLink to="/editardadosfuncionario" className={style.detalhesLink}>Editar</NavLink>   {''}
     <NavLink className={style.detalhesLink} > Excluir</NavLink>   {''}
    </div>
  )
}
