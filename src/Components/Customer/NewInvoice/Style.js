import styled from "styled-components";

const NewInvoiceStyle = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
 .custom-radius{
    background: #FCFBFB;
    margin-top: 100px;
    border-radius: 100px 0 0 0;
    @media(max-width:1440px){
      margin-top: 60px;
    }
    @media(max-width:1200px){
      margin-top: 50px;
    }
    @media(max-width:991px){
      border-radius: 0;
      margin-top: 0;
    }
  }
  .new-customer{
      padding: 35px 70px;
      @media(max-width:1299px){
        padding: 35px 40px;
      }
       @media(max-width:991px){
        padding: 35px 30px;
      }
       @media(max-width:767px){
        padding: 35px 20px;
      }
      @media(max-width:424px){
        padding: 35px 15px;
    }
    .create-estimate{
        justify-content: space-between;
        margin-top: 35px;
        h2{
            font-weight: 600 !important;
            margin-left: 0 !important;
            @media(max-width:575px){
                font-size: 18px !important;
            }
            @media(max-width:424px){
                margin-left: 22px !important;
                font-size: 14px !important;
            }
        }
        h4{
            font-weight: 700;
            font-size: 16px;
            color: #000000;
             @media(max-width:575px){
                font-size: 14px !important;
            }
        }
    }
    .MuiTableHead-root{
        .MuiTableRow-root{
            border-top: 0 !important;
            th{
                font-size: 12px;
                font-weight: 600 !important;
                color:#000;
            }
        }
    }
    .MuiTableRow-root{
        &:first-child{
            border-top:1px solid #000;
        }
        &:last-child{
            border-top:1px solid #575757;
            .MuiTableCell-root{
              font-weight:700;
            }
        }
        .MuiTableCell-root{
            border:0;
            font-size:14px;
            color:#575757;
            font-weight: 500;
            font-family: "Poppins", sans-serif !important;
        }
    }
    .invoce-new{
        text-align:end;
        p{
            cursor:pointer;
            color:#575757;
            font-size:12px;
            display: flex;
            align-items: center;
            justify-content: end;
            margin-top: 37px;
            svg{
                margin-right:7px;
                width: 10px;
                path{
                    stroke:#575757;
                }
            }
        }
        .invoice-btn{
            background: #FF4B4B;
            border-radius: 100px;
            color:#fff;
            padding: 16px 60px;
            font-weight: 700;
            font-size: 16px;
            text-transform:capitalize;
            font-size: 16px;
            margin-top: 37px;
        }
    }
    .edit-invoice{
        margin-right: 12px;
    }
    .invoice-table{
        margin-top:30px;
        >.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded{
          box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.25) !important;
          border-radius:10px;
        }
    }
    .create-cust{
      svg{
        @media(max-width:424px){
          width: 16px;
        }
      }
      h2{
          font-weight: 700;
          font-size: 24px;
          line-height: 33px;
          margin-left: 25px;
          @media(max-width:424px){
            margin-left: 8px;
            line-height: 30px;
            font-size: 18px;
          }
      }
    }
  }
`;
export default NewInvoiceStyle;