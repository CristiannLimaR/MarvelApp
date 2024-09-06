import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export function GridCharacters({ characters }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {characters &&
          characters.map((char) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={char.id}>
              <Card className="h-100">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                    alt={char.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {char.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Mostrar más
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

