import React from "react";
import NavBar from "./NavBar";
import {NavLink} from "react-router-dom"
import style from "./NavBar.module.css"



export default function Login(props) {

  // let nome = props.informacoes[0]
  // let email = props.informacoes[1];
  // let cpf = props.informacoes[2];
  // let senha = props.informacoes[3];
  // let razaoSocial = props.informacoes[3];

  // console.log(props.informacoes)
  // console.log(nome, email, cpf, senha, razaoSocial)

  return (
    <div>

      <NavBar />
      <h2>Faça Login</h2>
  <form>
    <div>
      <label htmlFor="exampleInputEmail1" >
        Login:
      </label>
      <input type="text" id="exampleInputEmail1" />
    </div>

  <div>
    <label htmlFor="exampleInputPassword1" >
      Senha:
    </label>
    <input type="password" />
  </div>

  <div>
     <input type="checkbox" id="exampleCheck1" />
        <label htmlFor="exampleCheck1">Não sou um robô</label>
    </div>
   <br />
  
          {/* Os estilos estão vindo do NavBar.module.css criei esse estilo e formatei somente a NavBar nele e os links */}
         <NavLink to="/" className={style.detalhesLink}>Entrar</NavLink> {''}
            <NavLink to="/CriarConta" className={style.detalhesLink}>Cadastre-se</NavLink> {''} 
         <br /> <br />
       <NavLink to="/" className={style.esqueciSenha}>Esqueci senha</NavLink> {''}

        <h6> Nunca iremos pedir os seus dados </h6>
  </form>

    </div>
  );
}
