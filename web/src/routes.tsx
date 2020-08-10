import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Home from './pages/Home'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
            <Route path="/home" component={Home}/>
        </BrowserRouter>
    )
}