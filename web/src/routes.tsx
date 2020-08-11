import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Home from './pages/Home'
import Register from './pages/Register'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/landing" component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/" exact component={Home}/>
        </BrowserRouter>
    )
}