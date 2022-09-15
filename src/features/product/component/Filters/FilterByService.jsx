import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import "./styleFilterByService.css";
FilterByService.propTypes = {
  filters: PropTypes.func,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  // const [values, setValues] = useState({
  //   isPromotion: Boolean(filters.isPromotion),
  //   isFreeShip: Boolean(filters.isFreeShip)
  // });
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    // setValues((prevValues) => ({
    //   ...prevValues,
    //   [name]: checked,
    // }));
    if (onChange) onChange({ [name]: checked });
  };

  return (
    <Box className="root">
      <Typography variant="subtitle2">DỊCH VỤ</Typography>
      <ul className="list">
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Vận chuyển miễn phí" },
        ].map((service) => (
          <li key={service} className="li">
            <Checkbox
              checked={filters[service.value]}
              onChange={handleChange}
              name={service.value}
            />
            <label>{service.label}</label>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
