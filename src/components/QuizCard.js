import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({title,subject,to}) {
  return (
    <Card style={{borderRadius:"6px"}} sx={{ maxWidth: 345,height:300 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/illustrations/quizimage.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subject}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={to} fullWidth variant='outlined'> Start </Button>
        
      </CardActions>
    </Card>
  );
}