import React from 'react'
import {NavLink} from 'react-router-dom';
import NavBar from './NavBar'
import style from "./NavBar.module.css"
import {useState} from 'react'

export default function EditarDadosFuncionario(props) {

    let mensagem = 'Dados editados com sucesso!'

   
  
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

  };

  return (
    <div>
      <NavBar />
      <h1>Editar dados do Funcionario</h1>

      <form onSubmit={onSubmit}>
        Nome:{" "}
            <input name="nome" type="text" placeholder="Digite o novo Nome" />{" "}
                <br />

             Cargo: <input name="cargo" placeholder="Digite o novo Cargo" /> <br />
            Setor: <input name="setor" placeholder="Digite o novo Setor" /> <br />
        Salário: <input name="salario"placeholder="Digite o novo Salário"/>{" "}

        <br />

          Responsável:{" "}
            <input name="responsavel" placeholder="Digite o novo Encarregado" /> <br /><br />
        <button type="submit" className={style.detalhesLink}>Salvar</button>
        
        <NavLink to="/detalhes" className={style.detalhesLink}>Voltar</NavLink> {''}
      </form>

      <p className="mensagem">{mensagem} </p>
    </div>
  )
}
