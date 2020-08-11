import React, { useState, FormEvent } from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import passwordImg from '../../assets/images/icons/password.svg'
import passwordOpenImg from '../../assets/images/icons/passwordOpen.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import { Link } from 'react-router-dom'

export default function Login(){
    const [image, setImage] = useState(passwordImg)
    const [type, setType] = useState('password')
    const [submit, setSubmit] = useState(false)

    function handlePassword(){
        setImage(value => (value === passwordImg) ? passwordOpenImg : passwordImg)
        setType(value => (value === 'password') ? 'text' : 'password')
    }

    function handleLogin(e: FormEvent){
        e.preventDefault()
        console.log('oi')
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
                <form onSubmit={handleLogin}>
                    <div className="login">
                        <h1>Fazer Login</h1>
                        <input type="email" placeholder="E-mail" />
                        <div className="password">
                            <input type={type} placeholder="Senha" />
                            <img src={image} alt="password" onClick={handlePassword}/>
                        </div>
                        <div className="line">
                            <input type="checkbox" />
                            <p>Lembrar-me</p>
                            <p>
                            <Link to="/register">
                            Esqueci minha senha
                            </Link>
                            </p>
                        </div>
                        <button style={{background: submit ? '#04D361' : '#dcdce5', color: submit ? 'white' : '#9C98A6'}}>Entrar</button>
                    </div>
                </form>
                <div className="info">
                    <div className="top">
                        <p>Não tem conta? </p>
                        <a href="/">Cadastre-se</a>   
                    </div>
                    <p>É de graça <img src={purpleHeartIcon} alt="" /></p>
                </div>
            </div>
        </div>
    );
}