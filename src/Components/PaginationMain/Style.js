import styled from "styled-components";

const PaginationMainStyle = styled.div`
    .pagination-main{
        margin-bottom:20px;
        .MuiPagination-ul{
            justify-content: end;
        }
        .MuiButtonBase-root{
            background: #fff;
            border-radius: 0;
            color: #575757;
            font-weight: 600;
            font-size: 18px;
            margin: 0;
            min-width: 40px;
            height: 40px;
            font-family: 'Poppins', sans-serif !important;
            &.Mui-disabled{
                opacity:1;
            }
            &.Mui-selected{
                color: #FF4B4B;
                border-bottom: 2px solid #FF4B4B;
            }
        }
        .MuiPaginationItem-previousNext{
            border-radius: 4px 0 0 4px;
        }
    }
`;
export default PaginationMainStyle;