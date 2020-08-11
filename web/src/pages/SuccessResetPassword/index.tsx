import React from 'react'

import './styles.css'

import successButtonIcon from '../../assets/images/icons/success-check-icon.svg'

import { Link } from 'react-router-dom'

export default function SucessResetPassword() {
    return (
        <div id="page-success">
            <div className="content">
                <img src={successButtonIcon} alt="Sucesso" />
                <h1 id="title">Redefinição enviada!</h1>
                <p>Boa, agora é só checar o e-mail que foi enviado para você <br />redefinir sua senha e aproveitar os estudos.</p>
                <Link to="/">Voltar ao login</Link>
            </div>
        </div>
    );
}