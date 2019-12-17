import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { getCharacters, clearLoadingPage } from './redux/actions'

import routes from './navigation/routes'

import Layout from './components/Layout'

import Home from './containers/Home'
import Characters from './containers/Characters'
import Movies from './containers/Movies'
import Loading from './containers/Loading'

import NotFound from './containers/NotFound'

const { home, characters, movies } = routes

const App = ({ getCharacters, loadingPage, clearLoadingPage }) => {
    useEffect(() => {
        window.addEventListener('load', clearLoadingPage)
        getCharacters()

        return () => {
            window.removeEventListener('load')
        }
    }, [])

    if (loadingPage) {
        return <Loading />
    }

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

const mapStateToProps = state => {
    const { loadingPage } = state
    return {
        loadingPage,
    }
}

const mapDispatchToProps = {
    getCharacters,
    clearLoadingPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
