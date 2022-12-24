import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, Box } from '@mui/material';
import { CountriesList } from './CountriesList';

const PATH = 'countries';
const PAGE_LIMIT = 20;

export const Countries = ({ data }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const totalPages = Math.round(data.length / PAGE_LIMIT);
  const dataToDisplay = data.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT);

  return (
    <>
      {data.length ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <CountriesList data={dataToDisplay} />
          <Box sx={{ marginTop: '3rem' }}>
            <Pagination
              page={page}
              siblingCount={1}
              boundaryCount={2}
              variant="outlined"
              color="primary"
              count={totalPages}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/${PATH}${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          </Box>
        </Box>
      ) : null}
    </>
  );
};
