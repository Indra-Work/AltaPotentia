import React from 'react';
import { Pagination, Box } from '@mui/material';
import PaginationMainStyle from "./Style";

const PaginationMain = () => {
    return (
      <PaginationMainStyle>
        <Box className='pagination-main'>
            <Pagination count={3} />
        </Box>
      </PaginationMainStyle>
  )
}

export default PaginationMain