import React from 'react'
import { NavLink } from 'react-router-dom'

import style from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav>
        <ul className={style.navBar} >
         <li>
            <NavLink to="/">Inicio</NavLink>
        </li>

        <li>
            <NavLink to="/CadastroFuncionario">Cadastrar Funcionário</NavLink>
        </li>

        <li>
            <NavLink to="/Consulta">Consulta</NavLink>
        </li>
        
        <li>
            <NavLink to="/Login">Sair</NavLink>
        </li>
      </ul>
    </nav>
  )
}
