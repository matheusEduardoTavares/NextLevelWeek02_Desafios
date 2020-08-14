import React from 'react'

import './styles.css'

import notFound from '../../assets/images/notFound.png'

import { Link } from 'react-router-dom'

export default function SucessResetPassword() {
    return (
        <div id="page-notFound">
            <div className="content">
                <img src={notFound} alt="Página não encontrada" />
                <h1 id="title">Página não encontrada!</h1>
                <p>A seguinte url digitada: {document.location.href} não existe!</p>
                <Link to="/">Voltar para paǵina inicial</Link>
            </div>
        </div>
    );
}