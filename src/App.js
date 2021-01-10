
import React from 'react'
import ThemeProvider from './context/Theme'
import Header from './components/Header'
import Section from './components/Section'
import Main from './components/Main'
import Form from './components/Form'
import Footer from './components/Footer'
import Button from './components/Button'

import 'react-toastify/dist/ReactToastify.css'


import { ToastContainer } from 'react-toastify'
export default () => {

    return (
        <>
            <ThemeProvider>
                <Header />
                <Button/>
                <Section />
                <Main />
                <Form />
                <Footer />
                <ToastContainer limit={1} hideProgressBar={true} autoClose={3000} />
            </ThemeProvider>

        </>
    )
}
