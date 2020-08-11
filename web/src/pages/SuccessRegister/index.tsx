import React from 'react'

import './styles.css'

import successButtonIcon from '../../assets/images/icons/success-check-icon.svg'

import { Link } from 'react-router-dom'

export default function SucessResetPassword() {
    return (
        <div id="page-successRegister">
            <div className="content">
                <img src={successButtonIcon} alt="Sucesso" />
                <h1 id="title">Cadastro concluído!</h1>
                <p>Agora você faz parte da plataforma da Proffy. <br />Tenha uma ótima experiência.</p>
                <Link to="/">Fazer login</Link>
            </div>
        </div>
    );
}