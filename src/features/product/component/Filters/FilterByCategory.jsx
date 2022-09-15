import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from '../../../../api/categoryApi';
import './styleFilterCategory.css';
FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({onChange}) {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        ( async () =>{
            try {
                const list = await categoryApi.getAll();
                console.log({list});
                setCategoryList(list.map((x) =>({
                    id: x.id,
                    name: x.name,
                })))
            } catch (error) {
                console.log('Failed to fetch category list' , error);
            }
        })()
    }, [])

    const handleCategoryClick = (category) => {
        if(onChange) {
            onChange(category.id)
        }
    }
    return (
       <Box className='root'>
        <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

        <ul className='menu'>
            {categoryList.map((category) => (
                <li key={category.id} className="li" onClick={() => handleCategoryClick(category)}>
                     <Typography variant="body2">{category.name}</Typography>

                </li>
                
            ))}
        </ul>
       </Box>
    );
}

export default FilterByCategory;