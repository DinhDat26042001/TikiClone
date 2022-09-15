import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail ? `https://api.ezfrontend.com${product.thumbnail?.url}` : 'https://via.placeholder.com/444'
    const navigate = useNavigate();
    const handleClick = (values) => {
      // console.log("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
      // navigate(`/products/${product.id}`);
      navigate(`/products`);
    }
    
  return (
    <Box padding={1} onClick={handleClick}  >
      
      {/* <Skeleton variant="rectangular" width="100%" height={118} /> */}
      <Box padding={1} minHeight="215px" >
      <img src={thumbnailUrl} 
      alt={product.name} width="100%" />
      </Box>
    
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">   
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
        {/* {product.salePrice} */}
       {new Intl.NumberFormat('vn-VN', {style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
