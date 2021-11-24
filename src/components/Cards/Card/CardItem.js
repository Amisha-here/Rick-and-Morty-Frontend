import React, { useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core/";

import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";

import {createCard} from "../../../actions/cards"

const CardItem = ({item}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [disable,setDisable] = useState(0);

    const dispatch = useDispatch();
    const classes = useStyles();

    const cards = useSelector((state)=> state.cards)
   // console.log(cards);

   // console.log(item.name);
   // let obj = cards.filter(o => o.name === item.name);


    const onSave = () => {
        dispatch(createCard(item));

        setDisable(1);
    }
    
    return (
        
        <Card className={classes.card}>
            
                <CardMedia
                className={classes.media}
                component="img"
                image={item.image}
                alt={item.name}
                />
                <CardContent>
                <Typography className={classes.title} gutterBottom variant="h8" component="h4" color="text-primary" >
                   <strong> {item.name} </strong>
                </Typography>
 
                <Typography className={classes.h9}  variant="h9" color="text-secondary" component="p"><strong>Status: </strong> {item.status}</Typography>
                <Typography className={classes.h9}  variant="h9" color="text-secondary" component="p"><strong>Gender: </strong> {item.gender}</Typography>
                <Typography  variant="h9" color="text-secondary" component="p"><strong>Species: </strong> {item.species}</Typography>
        
                </CardContent>
            
            {
                user?.result ? (
                    <CardActions className={classes.CardActions}>
                    {
                        disable ? <Button size="small" color="primary"  disabled>Save</Button> : 
                         <Button size="small" color="primary" onClick={onSave} >Save</Button>
                    }

                </CardActions>
                ) : null
            }
            
        </Card>

    )
}

export default CardItem;

