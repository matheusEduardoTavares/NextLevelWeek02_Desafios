import React, { useState, FormEvent } from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import { useHistory, Link } from 'react-router-dom'

export default function Login(){
    const history = useHistory()

    const [submit, setSubmit] = useState(false)

    const [email, setEmail] = useState('')

    function handleLogin(e: FormEvent){
        e.preventDefault()
        if (submit){
            history.push('/success')
        }
    }

    return (
        <div className="page-passwordForgot">
            <div className="areaImg">
                <div className="first-area">
                    <img src={logoImg} alt="Proffy"/>
                    <h1>Sua plataforma de estudos online.</h1>
                </div>
            </div>

            <div className="second-area">
                <Link to='/'><img src={backIcon} alt="Voltar" /></Link>
                <form onSubmit={handleLogin}>
                    <div className="login">
                        <h1>Eita, esqueceu sua senha? </h1>
                        <p>Não esquenta, vamos dar um geito nisso. <br /> para começar</p>
                        <div className="email">
                            <input type="email" placeholder="E-mail" 
                            value={email}
                            onChange={e => {
                                // eslint-disable-next-line
                                const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                const confirm = validateEmail.test(String(e.target.value).toLowerCase());
                                (e.target.value.length >= 4 && confirm) ? setSubmit(true) : setSubmit(false)
                                setEmail(e.target.value) 
                            }}
                            />
                        </div>                
                        <button id="button" title={submit ? '' : "E-mail deve conter mais de 3 caracteres"} style={{background: submit ? '#04D361' : '#dcdce5', color: submit ? 'white' : '#9C98A6', cursor: submit ? 'pointer' : 'auto'}}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}