<<<<<<< Updated upstream
import React from 'react'
import NavBar from './NavBar'
import {NavLink} from 'react-router-dom'
import style from "./NavBar.module.css"
import {useState} from "react"

export default function Consulta(props) {

  // Pega os valores do input do componente cadastrar funcionario
  const [dados, setDados] = useState()

  // usada para guardar os valores digitados na barra de pesquisa
  const [nomes, setNomes] = useState()
 
  // const pesquisa = pesquisar.value
  let nome = props.usuario[0]
  let cargo = props.usuario[1];
  let setor = props.usuario[2];
  let salario = props.usuario[3];

  const onSubmit = (e) => {
    e.preventDefault();

    // Pega os valores digitados no input pesquisa e coloca na variavel nomes
    const data = {
       nome: nomes.push(e.target.elements.pesquisar.value),
    };
  console.log(data)
  }

  // console.log(nome, cargo, setor, salario)
  // console.log(pesquisa)
  
  // const handleNome = () => {
  //  {nomes === nome ? nomes : 'Nome não encontrado'}
  // }

console.log(nome.toUpperCase())

  return (
    <div>
         <NavBar />
         <h1>Consulta</h1>
       
         <br />
         {/* Função onChange com problemas, ARRUMAR */}
             <input id="pesquisar" name="pesquisar"placeholder="Digite o nome do colaborador"  onChange={(e)=> setNomes(onSubmit)} width="350px" />{" "}
               <button  type="button" width="16px" >Pesquisar</button>{" "}
      
                <br /> <br /><br />         

                {/*Props.usuario esta sendo recebido de Cadastro.Js, 
                Cadastro.Js esta preenchendo a const usuario no App.js  para receber as informações por props*/}

               <h4 className="nomeFuncionario" id="nome" name="nome" >Nome Funcionário: {nome.toUpperCase()} </h4>
            <p className="cargo">Cargo: {cargo} </p>
         <p className="setor" >Setor: {setor} </p>
      <p className="salario">Salário: {cargo === nome ? salario  : '  não encontrado'}</p>

           <NavLink to="/detalhes" className={style.detalhesLink}> Detalhes </NavLink>
             <br />

    </div>
  )
}
=======
import React from 'react'
import NavBar from './NavBar'
import {NavLink} from 'react-router-dom'
import style from "./NavBar.module.css"
import {useState} from "react"

export default function Consulta(props) {

  // usada para guardar os valores digitados na barra de pesquisa
  const [nomes, setNomes] = useState()
 
// Os valores recebidos por props do array usuario no componente App esta sendo colocado nas variáveis abaixo
  let nome = props.usuario[0]
  let cargo = props.usuario[1];
  let setor = props.usuario[2];
  let salario = props.usuario[3];

  return (
    <div>
         <NavBar />
         <h1>Consulta</h1>
       
         <br />
         {/* Função onChange jogando o valor digitado na variável nomes */}
             <input id="pesquisar" name="pesquisar" placeholder="Digite o nome do colaborador"  onChange={(e)=> setNomes(e.target.value)} width="350px" />{" "}
                
                {/* Comparação do valor digitado com o salvo no componente CadastroFuncionário que esta armanezanado na variável, 
                se for dígitado na pesquisa o nome igual ao do cadastro retornar os dados caso contrário retorna null */}
                <ul key={nomes}>
                 <li>
                     <h4 >{nome === nomes ? 'Nome do funcionário: ' + nome : null}</h4>
                      </li> 
                         <li>
                           <p>{nome === nomes ? 'Cargo: ' + cargo : null} </p>
                            </li>
                              <li>
                             <p>{nome === nomes ? 'Setor: ' + setor : null} </p>
                          </li>
                        <li>
                     <p>{nome === nomes ? 'Salário: ' + salario : null} </p>
                  </li>
                <li>
                    <NavLink to="/detalhes"  className={nome === nomes ? style.detalhesLink : null}>  Detalhes</NavLink>
                   </li>
              </ul>
    </div>
  )
}
>>>>>>> Stashed changes
