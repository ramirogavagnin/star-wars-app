import React from 'react'

const DetailWrapper = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: 'salmon',
                width: '60%',
                position: 'fixed',
                right: 0,
                top: 0,
                bottom: 0,
                height: '100vh',
                padding: '10vh 2vw 2vw 2vw',
                //  paddingTop: '10vh',
            }}
        >
            {children}
        </div>
    )
}

export default DetailWrapper
