import React, { useState } from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import passwordImg from '../../assets/images/icons/password.svg'

export default function Login(){
    let [clicked, setClicked] = useState(false)
    let [color, setColor] = useState('black')

    function handlePassword(){
        setClicked(value => !value)
        setColor(value => (value === 'black')? 'green' : 'black')
    }

    return (
        <div className="page-login">
            <div className="block">
                <div className="first-area">
                    <img src={logoImg} alt="Proffy"/>
                    <h1>Sua plataforma de estudos online.</h1>
                </div>
            </div>

            <div className="second-area">
                <div className="login">
                    <h1>Fazer Login</h1>
                    <input type="text" placeholder="E-mail" />
                    <div className="password">
                        <input type="password" placeholder="Senha" />
                        <img src={passwordImg} alt="password" onClick={handlePassword} style={{color:color}}/>
                    </div>
                    <div className="line">
                        <input type="checkbox" />
                        <p>Lembrar-me</p>
                        <p>Esqueci minha senha</p>
                    </div>
                    <button>Entrar</button>
                </div>
                <div className="info">
                    <div className="top">
                        <p>Não tem conta? </p>
                        <p>É de graça</p>
                    </div>
                    <a href="/">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
}