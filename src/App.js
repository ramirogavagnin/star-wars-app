import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { getCharacters } from './redux/actions'

import routes from './navigation/routes'

import Layout from './components/Layout'

import Home from './containers/Home'
import Characters from './containers/Characters'
import Movies from './containers/Movies'

import NotFound from './containers/NotFound'

const { home, characters, movies } = routes

const App = ({ getCharacters }) => {
    useEffect(() => {
        getCharacters()
    }, [])
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path={home} component={Home} />
                    <Route exact path={characters} component={Characters} />
                    <Route exact path={movies} component={Movies} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

const mapDispatchToProps = {
    getCharacters,
}

export default connect(null, mapDispatchToProps)(App)
