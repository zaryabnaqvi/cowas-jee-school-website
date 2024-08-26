import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AchievementCard({ title, description, imageUrl, onImageClick }) {
  return (
    <Card sx={{ maxWidth: "100%", textAlign: "start", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <CardMedia
        component="img"
        alt="Achievement Image"
        style={{ aspectRatio: "4/3", width: "100%" }}
        onClick={() => onImageClick(imageUrl)} // Use onImageClick prop here
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" >Share</Button>
                <Button size="small" >Learn More</Button> */}
      </CardActions>
    </Card>
  );
}



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Image from '../Assets/qwerty.jpg'

// export default function AchievementCard({title,description,imageUrl}) {
//   return (
//     <Card sx={{ maxWidth: "100%" ,textAlign:"start",boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         style={{aspectRatio:"4/3",width:"100%"}}
//         image={imageUrl}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         {/* <Button size="small" >Share</Button>
//         <Button size="small" >Learn More</Button> */}
//       </CardActions>
//     </Card>
//   );
// }