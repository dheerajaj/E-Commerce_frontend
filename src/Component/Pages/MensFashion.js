import React, { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

function MensFashion() {
  const [menProducts, setMenProducts] = useState([]);

  const menProductsAPI = "https://fakestoreapi.com/products";

  useEffect(() => {
    // Fetch men's products data from the API

    fetch(menProductsAPI)
      .then((response) => response.json())

      .then((data) => {
        setMenProducts(data);
      })

      .catch((error) => {
        console.error("Error fetching men's products:", error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Men's Products
      </Typography>

      <Grid container spacing={3}>
        {menProducts.length > 0 ? (
          menProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={product.name}
                  style={{
                    width: "100px",
                    height: "130px",
                    textAlign: "center",
                  }}
                  image={product.image}
                />

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>

                  <Typography variant="h6" color="primary">
                    Price: ${product.price}
                  </Typography>

                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No men's products available at the moment.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default MensFashion;
