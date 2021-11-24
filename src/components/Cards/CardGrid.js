import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';

import CardItem from './Card/CardItem'

const CardGrid = ({items}) => {

    return (
        !items.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={3}>
                {
                    items.map((item) => (
                        <Grid key={item.char_id} item  >
                            <CardItem item={item} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default CardGrid
