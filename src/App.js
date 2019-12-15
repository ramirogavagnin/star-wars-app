import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './containers/Home'
import Characters from './containers/Characters'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={Characters} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
