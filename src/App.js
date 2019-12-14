import React from 'react'
import logo from './logo.svg'
import './App.css'
import DrawerMenu from './components/DrawerMenu'
import Characters from './containers/Characters'

function App() {
    return (
        <div className="App">
            <DrawerMenu>
                <Characters />
            </DrawerMenu>
        </div>
    )
}

export default App
