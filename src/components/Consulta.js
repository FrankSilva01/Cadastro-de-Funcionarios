import React from 'react'
import NavBar from './NavBar'
import {NavLink} from 'react-router-dom'
import style from "./NavBar.module.css"
import {useState} from "react"

export default function Consulta(props) {

  // usada para guardar os valores digitados na barra de pesquisa
  const [nomes, setNomes] = useState('')
 
// Os valores recebidos por props do array usuario no componente App esta sendo colocado nas variáveis abaixo
  let nome = props.usuario[0]
  let cargo = props.usuario[1];
  let setor = props.usuario[2];
  let salario = props.usuario[3];

  return (
    <div>
         <NavBar />
             <h1>Consulta</h1>
         <p>Digite abaixo o nome do funcionário</p>
       
        <br />
         {/* Função onChange jogando o valor digitado na variável nomes */}
             <input id="pesquisar" name="pesquisar" placeholder="Digite o nome do colaborador"  onChange={(e)=> setNomes(e.target.value)} width="350px" />{" "}
                
                {/* Comparação do valor digitado com o salvo no componente CadastroFuncionário que esta armanezanado na variável, 
                se for dígitado na pesquisa o nome igual ao do cadastro retornar os dados caso contrário retorna null */}
                <ul key={nomes} className={style.listStyle}>
                 <li>
                     <h4 >{nome === nomes ? 'Nome do funcionário: ' + nome : ' '}</h4>
                      </li> 
                         <li>
                           <p>{nome === nomes ? 'Cargo: ' + cargo : ''} </p>
                            </li>
                              <li>
                             <p>{nome === nomes ? 'Setor: ' + setor : ''} </p>
                          </li>
                        <li>
                     <p>{nome === nomes ? 'Salário: ' + salario : ''} </p>
                  </li>
                <li>
                    <NavLink to="/detalhes" className={nome === nomes ? style.detalhesLink : ''} >  Detalhes</NavLink>
                   </li>
              </ul>
    </div>
  )
}
