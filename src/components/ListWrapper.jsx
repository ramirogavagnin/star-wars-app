import React from 'react'

const ListWrapper = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: 'blue',
                width: '40%',
                paddingTop: '9vh',
                marginLeft: 0,
                // padding: '10vh 1vw 1vw 1vw',
            }}
        >
            {children}
        </div>
    )
}

export default ListWrapper
