import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper } from "@mui/material";
import "./styleDetailPage.css";
import ProductThumbnail from "../component/ProductThumbnail";
import ProductInfo from "../component/ProductInfo";
DetailPage.propTypes = {
  product: PropTypes.object,
};

function DetailPage({product}) {
  return (
    <Box className="roott">
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className="leftt">
              Thumnail
              <ProductThumbnail product={product} /> 
            </Grid>
            <Grid item className="rightt">
              <ProductInfo product={product} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
