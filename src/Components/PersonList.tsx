import React from 'react';
import {Data} from './Interfaces';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Paper} from '@material-ui/core';
import Card from '@material-ui/core/card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    grid : {
        width : '100%',
        marginTop : '10%'
    },
    paper : {
        padding : theme.spacing(0.6),
        textAlign : 'center',
        color : theme.palette.text.primary,
        background : theme.palette.error.main
    },
    media : {
        height : '240px'
    },
    fontClass : {
        fontSize : '20px'
    },
    '@media (max-width : 768px)' : {
        fontClass : {
            fontSize : '15px'
        },
        media : {
            height : '150px'
        }
    }
}));

interface PList{
    items : Data[]
}

const PersonList: React.FC<PList> = ({items} ) => {
    const classes= useStyles();
    return (
        <Grid container spacing={3} className={classes.grid}>
            {items.map((item: Data) => {
                return(
                    <Grid item xs={6} sm={4} md={4} key={item.id}>
                        <Paper className={classes.paper}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia className={classes.media} image={item.avatar}/>
                                    <CardContent>
                                        <Typography gutterBottom className={classes.fontClass}>
                                            {item.first_name}
                                        </Typography>
                                        <Typography gutterBottom className={classes.fontClass}>
                                            {item.last_name}
                                        </Typography>
                                        <Typography gutterBottom className={classes.fontClass}>
                                            {item.email}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>
                ); 
            })}
        </Grid>
    );
}

export default PersonList;