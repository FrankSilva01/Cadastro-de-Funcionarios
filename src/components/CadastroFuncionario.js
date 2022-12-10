import React from "react";
import NavBar from "./NavBar";
import {NavLink} from 'react-router-dom'
import style from "./NavBar.module.css"

export default function CadastroFuncionario(props) {
  
  
  // Função para pegar os valores dos inputs e passar para a const usuario que esta no app.js, assim podendo transmitir os dados por props para o Consulta.Js e Detalhes.Js
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
       nome: props.usuario.push(e.target.elements.nome.value),
          cargo: props.usuario.push(e.target.elements.cargo.value),
            setor: props.usuario.push(e.target.elements.setor.value),
         salario: props.usuario.push(e.target.elements.salario.value),
      responsavel: props.usuario.push(e.target.elements.responsavel.value),
      
    };

    // Somente uma confirmação de que esta pegando os dados
    // console.log(props.usuario[0]);
    // console.log(props.usuario[1]);
    // console.log(props.usuario[2]);
    // console.log(props.usuario[3]);
    
  };

  return (
    <div>
      <NavBar />
      <h1>Cadastro de Funcionario</h1>

      <form onSubmit={onSubmit}>
        Nome:{" "}
        <input name="nome" type="text" placeholder="Nome do Funcionário" />{" "}
        <br />

        Cargo: <input name="cargo" placeholder="Cargo do Funcionário" /> <br />
        Setor: <input name="setor" placeholder="Setor do Funcionário" /> <br />
        Salário: <input name="salario"placeholder="Salário do Funcionário"/>{" "}

        <br />

        Responsável:{" "}
        <input name="responsavel" placeholder="Encarregado do setor" /> <br /><br />
        <button type="submit" className={style.detalhesLink}>Cadastrar Colaborador</button>
      </form>

      <p className="mensagem"></p>
    </div>
  );
}
