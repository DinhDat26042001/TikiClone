import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import './styleFilterByPrice.css'
FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({onChange}) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    // console.log(values);
    if (onChange) onChange(values);
    setValues({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })
  };
  return (
    <Box className="root">
      <Typography variant="subtitle2"> CHỌN KHOẢNG GIÁ</Typography>
      <Box className="range">
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span className="span"> - </span>
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={handleSubmit} size="small">
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
