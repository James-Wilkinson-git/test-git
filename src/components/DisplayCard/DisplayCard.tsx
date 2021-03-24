import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  GridListTile,
  GridListTileBar,
  Typography,
} from '@material-ui/core';
import React, { FC } from 'react';

const DisplayCard: FC<any> = ({ gif }) => {
  // return (
  //   <GridListTile key={gif.id}>
  //     <img src={gif.images.original.url} alt={gif.title} />
  //     <GridListTileBar
  //       title={gif.title}
  //       subtitle={<span>by: {gif.username}</span>}
  //     />
  //   </GridListTile>
  // );
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={gif.images.original.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {gif.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {gif.username}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default DisplayCard;
