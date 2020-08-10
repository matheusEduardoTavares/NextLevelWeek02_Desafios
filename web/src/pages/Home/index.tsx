import React from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'

export default function Login(){
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
                    <input type="password" placeholder="Senha" />
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