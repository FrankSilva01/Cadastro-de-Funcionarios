import React from "react";
import "./App.css";
import CadastroFuncionario from "./components/CadastroFuncionario";
import Consulta from "./components/Consulta";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Detalhes from "./components/Detalhes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaNaoEncontrada from "./components/PaginaNaoEncontrada";
import CriarConta from "./components/CriarConta";
import EditarDadosFuncionario from "./components/EditarDadosFuncionario";

function App() {
  // Array vazio para receber os valores dos inputs no componente Cadastro.js.
  // Const usuario irá receber os valores do input no componente Cadastro.js e será passado por props para o Consulta.js e Detalhes.js para poder renderizar os componentes com as informações
  const usuario = [];

  // Const Dados Adiciona por push os campos digitados no componente CriarConta para esse Array
  const informacoes = []

  return (
    <div className="App">
      {/* Rotas do APP */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route
            path="/CadastroFuncionario"
            element={<CadastroFuncionario usuario={usuario} />}
          ></Route>
          <Route
            path="/Consulta"
            element={<Consulta usuario={usuario} />}
          ></Route>
          <Route
            path="/Detalhes"
            element={<Detalhes usuario={usuario} />}
          ></Route>
          <Route path="/Login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/Sair" element={<Login usuario={usuario} informacoes={informacoes} />}></Route>
          <Route path="CriarConta" element={<CriarConta usuario={usuario}  informacoes={informacoes} />}> </Route>
          <Route path="EditarDadosFuncionario" element={<EditarDadosFuncionario />}> </Route>
          <Route path="*" element={<PaginaNaoEncontrada />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
