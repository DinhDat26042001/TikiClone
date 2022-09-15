import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
// import { Box } from '@mui/system';
import "./styleFilterViewer.css";
// import { createTheme, makeStyles, Theme, ThemeProvider } from   "@mui/material/styles"

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         flexFlow: 'row wrap',
//         alignItems: 'center',
//         margin: theme.spacing(2,0),
//         listStyleType:'none'
//     }
// }))
FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {

//   const visibleFilters = useMemo(() => {
//     return FILTER_LIST.filter((x) => x.isVisible(filters));
//   },[filters]);

  const FILTER_LIST = [
    {
      id: 1,
      getLabel: () => "Giao hàng miễn phí",
      isActive: (filters) => filters.isFreeShip,
      isVisible: () => true,
      isRemovable: false,
      onRemove: () => {},
      onToggle: (filters) => {
        const newFilters = { ...filters };
        if (newFilters.isFreeShip) {
          delete newFilters.isFreeShip;
        } else {
          newFilters.isFreeShip = true;
        }
        return newFilters;
      },
    },
    {
      id: 2,
      getLabel: (filters) => "Có khuyến mãi",
      isActive: (filters) => true,
      isVisible: (filters) => filters.isPromotion,
      isRemovable: true,
      onRemove: (filters) => {
        const newFilters = {...filters}
        delete newFilters.isPromotion
        return newFilters;
      },
      onToggle: () => {},
    },
    {
      id: 3,
      getLabel: (filters) => ` Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte} `,
      isActive: () => true,
      isVisible: (filters) => Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
      isRemovable: true,
      onRemove: (filters) => {
        const newFilters = {...filters}
        delete newFilters.salePrice_gte
        delete newFilters.salePrice_lte;
        return newFilters;
      },
      onToggle: () => {

      },
    },
    // {
    //   id: 4,
    //   getLabel: (filters) => "Danh mục",
    //   isActive: (filters) => true,
    //   isVisible: (filters) => true,
    //   isRemovable: true,
    //   onRemove: (filters) => {},
    //   onToggle: (filters) => {},
    // },
  ];
  return (
    <Box component="ul" className="roott">
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li className="li" key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            // clickable={x.isRemovable ? null : () => {}}
            clickable={!x.isRemovable}
            onClick={x.isRemovable ? null : () => {
                if (!onChange) return;
                const newFilters = x.onToggle(filters)
                onChange(newFilters);
            }}
            onDelete={x.isRemovable ? () => {
                if (!onChange) return;
                const newFilters = x.onRemove(filters)
                onChange(newFilters);
            } : null}
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
