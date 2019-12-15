import React from 'react'
import TableWrapper from '../components/TableWrapper'
import DetailWrapper from '../components/DetailWrapper'
import CustomTable from '../components/CustomTable'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Characters = props => {
    const matches = useMediaQuery('(min-width:600px)')

    return (
        <>
            <Grid item xs={12}>
                <TableWrapper matches={matches}>
                    <CustomTable matches={matches} />
                </TableWrapper>
            </Grid>
            <Grid item xs={12}>
                <DetailWrapper matches={matches}>
                    <p style={{ color: 'white' }}>pepe</p>
                </DetailWrapper>
            </Grid>
        </>
    )
}

export default Characters
