import React, { useState } from 'react'

import api from '../../services/api'

import './styleL.css'

import logo from './../../assets/logo.png'


export default function Login({ history }) {
  const [email, pass] = useState('');

  //, setPass, setEmail
  //onClickCapture={event => setPass(event.target.value)}
  //onClickCapture={event => setEmail(event.target.value)}

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
                    <label htmlFor="email">E-MAIL</label>
                    <input 
                    id="email" 
                    type="email" 
                    placeholder="Seu e-mail"
                    value={email}
                    required
                    />

                    <label htmlFor="pass">Senha</label>
                    <input 
                    id="pass" 
                    type="password" 
                    placeholder="Digite a sua senha"
                    value={pass}
                    required
                    />

                    
                    <label htmlFor="email">Novo colaborador?</label>
                    <a href="./../New">Cadastro para novo colaborador</a>

                    <button className="btn" type="submit">Entrar</button>
                
                </form>
        
                </div>
            </div>
    </>
  );
}