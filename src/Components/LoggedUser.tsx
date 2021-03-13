import React, {useContext,useReducer} from 'react';
import {personContext} from '../App';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Paper} from '@material-ui/core';
import Card from '@material-ui/core/card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    grid : {
        width : '100%',
        marginTop : '5%',
        display: 'flex',
        flexDirection : 'column',
        paddingLeft: '40%'
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
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    formData : {
        display : 'flex',
        flexDirection : 'column',
        width : '40%',
        paddingTop: '10px'
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

type State = {
    id : number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
};

const initialState : State ={
    id : 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
}
type Action = { type: 'setFirstName', payload: string }
  | { type: 'setLastName', payload: string };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setFirstName': 
            return {
                ...state,
                first_name: action.payload
            };
        case 'setLastName': 
            return {
                ...state,
                last_name: action.payload
            };
        }
    }


const LoggedUser:React.FC= () => {
    const person = useContext(personContext);
    const classes= useStyles();
    const [state, dispatch] = useReducer(reducer,initialState);

    const handleFirstNameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setFirstName',
        payload: event.target.value
      });
    };

    const handleLastNameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setLastName',
        payload: event.target.value
      });
    };

    return (
        <>
        <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={6} sm={4} md={4} key={person.id}>
                <Paper className={classes.paper}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className={classes.media} image={person.avatar}/>
                            <CardContent>
                                <Typography gutterBottom className={classes.fontClass}>
                                    {state.first_name ? state.first_name : person.first_name}
                                </Typography>
                                <Typography gutterBottom className={classes.fontClass}>
                                    {state.last_name ? state.last_name : person.last_name}
                                </Typography>
                                <Typography gutterBottom className={classes.fontClass}>
                                    {person.email}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </Grid>
            <div className={classes.formData}>
            <TextField
            label ="First Name"
            placeholder ="first_name"
            id = 'firstName'
            onChange ={handleFirstNameChange}            
            />
            <TextField
            label = "Last Name"
            placeholder = "last_name"
            id = 'lastName'
            onChange={handleLastNameChange}
            />
        </div>
        </Grid>
        </>
    );
}

export default LoggedUser;