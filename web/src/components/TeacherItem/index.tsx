import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

import userDefault from '../../assets/images/user.png'

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id
        })
    }
    
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar.length > 0 ? teacher.avatar : userDefault} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora <strong>{teacher.cost.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>
                </p>
                <a target="_blank" rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem