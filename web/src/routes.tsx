import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Home from './pages/Home'
import Register from './pages/Register'
import PasswordForgot from './pages/PasswordForgot'
import SuccessResetPassword from './pages/SuccessResetPassword'
import SuccessRegister from './pages/SuccessRegister'

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/landing" component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/passwordforgot" exact component={PasswordForgot}/>
            <Route path="/success" component={SuccessResetPassword} />
            <Route path="/successregister" component={SuccessRegister} />
            <Route path="/" exact component={Home}/>
        </BrowserRouter>
    )
}