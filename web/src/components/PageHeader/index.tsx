import React from 'react'

import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface PageHeaderProps {
    title: string;
    // title?: string;
    description?: string;
}

// const PageHeader: React.FunctionComponent 
// é a mesma coisa de:
// const PageHeader: React.FC
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className='page-header'>
            <div className="top-bar-container">
                <Link to="/landing">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {/* { props.description ? <p>{props.description}</p> : null } */}
                { props.description && <p>{props.description}</p> }
                {props.children}
            </div>

        </header>
    )
}

export default PageHeader