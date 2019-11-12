import React, { useState } from 'react'

import api from '../../services/api'

import './../Login/styleL.css'

import logo from './../../assets/logo.png'

export default function Login({ history }) {
  const [email, nome, cpf, pass] = useState('');

  //, setNome, setCpf, setPass, ,setEmail
  //onClickCapture={event => setNome(event.target.value)}
  //onClickCapture={event => setEmail(event.target.value)}
  //onClickCapture={event => setCpf(event.target.value)}
  //onClickCapture={event => setPass(event.target.value)}
  //onClickCapture={event => setPass(event.target.value)}

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id)

    history.push('/')

  }

  return (
    <>

      <div className="containerned">

        <img className="imgS" src={logo} alt='Logo'></img>

        <div className="card">

          <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
          </p>

          <form onSubmit={handleSubmit}>

            <label htmlFor="nome">Nome</label>
              <input 
                id="nome" 
                type="text" 
                placeholder="Seu nome completo"
                value={nome}
                required
              />  
            
              <label htmlFor="email">E-MAIL</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Seu e-mail"
                value={email}
                required
              />

              <label htmlFor="email">CPF</label>
              <input 
                id="cpf" 
                type="numeric" 
                placeholder="000000000000"
                value={cpf}
                required
              />

              <label htmlFor="pass">Senha</label>
              <input 
                id="pass" 
                type="password" 
                placeholder="Crie uma senha"
                value={pass}
                required
              />

              <label htmlFor="pass">Confirme a senha</label>
              <input 
                id="pass" 
                type="password" 
                placeholder="Confirme a senha"
                value={pass}
                required
              />

              <button className="btn" type="submit">Cadastrar</button>

          </form>
        
        </div>
      </div>
    </>
  );
}