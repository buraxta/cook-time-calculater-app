import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import DataContext from "../DataContext";

const PerfectTime = () => {
  const { showImage, setShowImage } = React.useContext(DataContext);
  React.useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 2000);
  }, []);

  return showImage ? (
    <motion.div
      className="w-[500px] h-[400px] ml-28 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      duration={2}
    >
      <img src="wait.gif" alt="wait" />
      <motion.h3 onClick={() => setShowImage(false)} className="text-left">
        Calculating the perfect time...
      </motion.h3>
    </motion.div>
  ) : (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PerfectTime;
