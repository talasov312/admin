import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Truncate from 'react-truncate';
import { clientContext } from '../contexts/ClientContext';
import { Link } from 'react-router-dom';
import './../index.css'

// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Rating from '@material-ui/lab/Rating';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        margin: '0 10px 10px 10px',
        width: 240,
        minHeight: 390,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    media: {
        backgroundSize: "contain",
        backgroundColor: "rgb(197, 199, 214)",
        width: '100px',
        height: '100px'
    },
    // zvz: {
    //     backgroundSize: "contain",
    //     marginBottom: '0px'
    //     },
});

export default function MediaCard({ item }) {
    const classes = useStyles();
    const { addAndDeleteProductInCart, checkProductInCart } = useContext(clientContext)

      const [value, setValue] = React.useState(2);


    return (

        
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {item.title}
                    </Typography>
                    <CardMedia
                    className={classes.media}
                    image={item.photo}
                    
                />

                    <Typography variant="body2" color="textSecondary" component="p">
                        <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>далее</a></span>}>
                            {item.description}
                        </Truncate>
                    </Typography>
                    <h3>Цена: {item.price}</h3>
                </CardContent>
            </CardActionArea>
            <CardActions className='card_action'>
                <Button
                    onClick={() => addAndDeleteProductInCart(item)}
                    size="small"
                    color="primary"
                >
                    <ShoppingCartIcon
                        color={checkProductInCart(item.id) ? "primary" : "secondary"}
                    />
                    
                </Button>
                {/* <Link to={`/info/${item.id}`}>
                    <Button size="small" color="primary">
                        Подробнее
                    </Button>
                </Link> */}

                
                {/* < FavoriteBorderIcon color={checkProductInCart(item.id) ? "primary" : "secondary"}/> */}

                 {/* <div> */}
                     
      <Box className='box_rating' component="fieldset" mb={3} borderColor="transparent">
        <Rating className={classes.zvz}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      {/* </div> */}
            
            </CardActions>  

        </Card>

        
    );
}
