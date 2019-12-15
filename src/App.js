import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { getCharacters } from './redux/actions'

import Layout from './components/Layout'

import Home from './containers/Home'
import Characters from './containers/Characters'

const App = ({ getCharacters }) => {
    useEffect(() => {
        getCharacters()
    }, [])
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/characters" component={Characters} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

const mapDispatchToProps = {
    getCharacters,
}

export default connect(null, mapDispatchToProps)(App)
