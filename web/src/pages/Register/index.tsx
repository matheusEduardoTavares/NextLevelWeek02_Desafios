import React, { useState, FormEvent } from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import passwordImg from '../../assets/images/icons/password.svg'
import passwordOpenImg from '../../assets/images/icons/passwordOpen.svg'
import backIcon from '../../assets/images/icons/back.svg'

import { useHistory, Link } from 'react-router-dom'

export default function Login(){
    const history = useHistory()

    const [image, setImage] = useState(passwordImg)
    const [type, setType] = useState('password')
    const [submit, setSubmit] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    function handlePassword(){
        setImage(value => (value === passwordImg) ? passwordOpenImg : passwordImg)
        setType(value => (value === 'password') ? 'text' : 'password')
    }

    function handleLogin(e: FormEvent){
        e.preventDefault()
        if (submit){
            history.push('/successregister')
        }
    }

    return (
        <div className="page-register">
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
                        <div className="name">
                            <h1>Cadastro</h1>
                            <p>Preencha os dados abaixo <br /> para começar</p>
                            <input type="text" placeholder="Nome" 
                            value={name}
                            onChange={e => {
                                // eslint-disable-next-line
                                const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                const confirm = validateEmail.test(String(email).toLowerCase());
                                (e.target.value.length >= 1 && password.length >= 6 && lastName.length >= 1 && email.length >= 4 && confirm) ? setSubmit(true) : setSubmit(false)
                                setName(e.target.value) 
                            }}
                            />
                        </div>
                        <div className="lastname">
                            <input type="text" placeholder="Sobrenome" 
                            value={lastName}
                            onChange={e => {
                                // eslint-disable-next-line
                                const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                const confirm = validateEmail.test(String(email).toLowerCase());
                                (e.target.value.length >= 1 && password.length >= 6 && name.length >= 1 && email.length >= 4 && confirm) ? setSubmit(true) : setSubmit(false)
                                setLastName(e.target.value) 
                            }}
                            />
                        </div>
                        <div className="email">
                            <input type="email" placeholder="E-mail" 
                            value={email}
                            onChange={e => {
                                // eslint-disable-next-line
                            const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            const confirm = validateEmail.test(String(e.target.value).toLowerCase());
                                (e.target.value.length >= 4 && password.length >= 6 && name.length >= 1 && lastName.length >= 1 && confirm) ? setSubmit(true) : setSubmit(false)
                                setEmail(e.target.value) 
                            }}
                            />
                        </div>                
                        <div className="password">
                            <input type={type} placeholder="Senha" 
                            value={password}
                            onChange={e => {
                                // eslint-disable-next-line
                                const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                const confirm = validateEmail.test(String(email).toLowerCase());
                                (e.target.value.length >= 6 && name.length >= 1 && lastName.length >= 1 && email.length >= 4 && confirm) ? setSubmit(true) : setSubmit(false)
                                setPassword(e.target.value)             
                            }}
                                
                            />
                            <img src={image} alt="password" onClick={handlePassword}/>
                        </div>
                        <button title={submit ? '' : "E-mail deve conter mais de 3 caracteres, senha deve conter mais de 5 caracteres, nome e sobrenome devem ter pelo menos 1 caractere"} style={{background: submit ? '#04D361' : '#dcdce5', color: submit ? 'white' : '#9C98A6', cursor: submit ? 'pointer' : 'auto'}}>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}