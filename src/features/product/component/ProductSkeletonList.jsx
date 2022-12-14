import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
// import {Skeleton} from '@mui/material'
ProductSkeletonList.propTypes = {
  length: PropTypes.number, // muốn show bao nhiêu cái skeleton thì truyền bấy nhiêu vào
};

ProductSkeletonList.defaultsProps = {
  length: 9, // sẽ show ra 6 thằng skeleton lúc loading
};

function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
