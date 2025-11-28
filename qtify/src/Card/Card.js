import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';


export default function AlbumCard({id, image, title, Follows, Likes}) {
    
  return (<>
  
    <Card sx={{ maxWidth: 159, height: 205 }}>
      <CardActionArea>
        <CardMedia
        component="img"
        alt={title}
        height="170"
        image={image}
      />
      <div className={styles.chipArea}>
          <Chip sx={{backgroundColor: "#121212",
             height: "23px",
              fontFamily: "Poppins",
               fontSize: "10px",
                fontWeight: 400,
                 color: "#FFFFFF"
                 }} label= {Likes ? `${Likes} Likes`: `${Follows} Follows`}/>
        </div>
      </CardActionArea>
      </Card>
        <div className={styles.cardText}>
          {/* New Bollywood */}
          {title}
        </div>
      
      </>
    
  );
}