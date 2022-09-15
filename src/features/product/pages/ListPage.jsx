import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import productApi from "./../../../api/productApi.js";
// import { makeStyles, Typography } from "@mui/material";
import "./style.css";
import ProductSkeletonList from "../component/ProductSkeletonList.jsx";
import ProductList from "../component/ProductList.jsx";
import { Button, Pagination } from "@mui/material";
import ProductSort from "../component/ProductSort.jsx";
import ProductFilters from "../component/ProductFilters.jsx";
import FilterViewer from "../component/Filters/FilterViewer.jsx";
// import { unstable_HistoryRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import queryString from 'query-string';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ListPage.propTypes = {};

function ListPage(props) {
  // const history =  useNavigate();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilter] = useState({
    _page: 1,
    _limit: 10,
    _sort: "salePrice:ASC",
  });

  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters)
  //   })
  // },[history, filters]);
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        // console.log({response});
        setProductList(data);
        setPagination(pagination);
        // console.log({data, pagination});
      } catch (error) {
        console.log("Failed to fetch product list page", error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChangle = (e, page) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _sort: newSortValue,
    }));
  };

  const handleFilterChange = (newFilters) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilter(newFilters);
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className="left">
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFilterChange} />
            </Paper>
          </Grid>

          <Grid item className="right">
            <Paper elevation={0}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />
              <FilterViewer filters={filters} onChange={setNewFilters} />
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}

              <Box className="pagination">
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChangle}
                ></Pagination>
              </Box>
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
