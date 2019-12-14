import React from 'react'
import ListWrapper from '../components/ListWrapper'
import DetailWrapper from '../components/DetailWrapper'
import CustomTable from '../components/CustomTable'

const Characters = props => {
    return (
        <>
            <ListWrapper>
                <CustomTable />
            </ListWrapper>
            <DetailWrapper>
                <p>pepe</p>
            </DetailWrapper>
        </>
    )
}

export default Characters
