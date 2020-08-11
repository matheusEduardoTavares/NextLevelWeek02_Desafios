import React, { useState, FormEvent } from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import passwordImg from '../../assets/images/icons/password.svg'
import passwordOpenImg from '../../assets/images/icons/passwordOpen.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import { Link, useHistory } from 'react-router-dom'

export default function Login(){
    const history = useHistory()

    const [image, setImage] = useState(passwordImg)
    const [type, setType] = useState('password')
    const [submit, setSubmit] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState('')

    function handlePassword(){
        setImage(value => (value === passwordImg) ? passwordOpenImg : passwordImg)
        setType(value => (value === 'password') ? 'text' : 'password')
    }

    function handleLogin(e: FormEvent){
        e.preventDefault()
        if (submit){
            history.push('/landing')
        }
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
                        <input type="email" placeholder="E-mail" 
                        value={email}
                        onChange={e => {
                            // eslint-disable-next-line
                            const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            const confirm = validateEmail.test(String(e.target.value).toLowerCase());
                            (e.target.value.length >= 4 && password.length >= 6 && confirm) ? setSubmit(true) : setSubmit(false)
                            setEmail(e.target.value) 
                        }}
                        />
                        <div className="password">
                            <input type={type} placeholder="Senha" 
                            value={password}
                            onChange={e => {
                                (email.length >= 4 && e.target.value.length >= 6) ? setSubmit(true) : setSubmit(false)
                                setPassword(e.target.value)             
                            }}
                                
                            />
                            <img src={image} alt="password" onClick={handlePassword}/>
                        </div>
                        <div className="line">
                            <input type="checkbox" 
                            value={checkbox}
                            onChange={e => setCheckbox(e.target.value)}
                            />
                            <p>Lembrar-me</p>
                            <p>
                            <Link to="/passwordforgot">
                            Esqueci minha senha
                            </Link>
                            </p>
                        </div>
                        <button title={submit ? '' : "E-mail deve conter mais de 3 caracteres e senha deve conter mais de 5 caracteres"} style={{background: submit ? '#04D361' : '#dcdce5', color: submit ? 'white' : '#9C98A6', cursor: submit ? 'pointer' : 'auto'}}>Entrar</button>
                    </div>
                </form>
                <div className="info">
                    <div className="top">
                        <p>Não tem conta? </p>
                        <Link to="/register">Cadastre-se</Link>   
                    </div>
                    <p>É de graça <img src={purpleHeartIcon} alt="" /></p>
                </div>
            </div>
        </div>
    );
}