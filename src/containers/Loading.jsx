import React from 'react'
import Title from '../components/Title'
import Logo from '../assets/images/vader.png'

const Loading = () => {
    return (
        <div className="loading">
            <div className="avatar">
                <img src={Logo} alt="Dark Vader" />
            </div>
            <div className="content">
                <Title>Cargando...</Title>
            </div>
        </div>
    )
}

export default Loading
