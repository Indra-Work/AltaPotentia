import styled from "styled-components";

const NewEstimateStyle = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
 .custom-radius{
    background: hsl(0deg 14% 99%);
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
      padding: 35px 145px;
      @media(max-width:1440px){
        padding: 35px 80px;
      }
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
        h2{
            font-weight: 600 !important;
            margin-left: 50px !important;
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
    .create-cust{
      svg{
        @media(max-width:424px){
          width: 16px;
        }
      }
      h2{
          font-weight: 700;
          font-size: 22px;
          line-height: 33px;
          margin-left: 25px;
          @media(max-width:424px){
            margin-left: 8px;
            line-height: 30px;
            font-size: 18px;
          }
      }
    }
    .custform-main{
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      @media(max-width:575px){
        display: block;
        margin-top: 40px;
      }
      @media(max-width:1200px){
        width: 100%;
      }
      .custside-first{
        @media(max-width:1200px){
          width:48%
        }
        @media(max-width:575px){
          width:100%
        }
      }
      .cust-scan{
        svg{
          position: absolute;
          top: 63px;
          right: 19px;
          @media(max-width:1200px){
            top: 60px;
            width: 16px;
          }
          @media(max-width:991px){
            top: 54px;
            width: 16px;
          }
            @media(max-width:768px){
              top: 51px;
              right: 19px;
              width: 14px;
            }
        }
      }
      .cust-picker{
        .MuiOutlinedInput-input{
            width: -webkit-fill-available;
            border: 0;
            font-size: 12px;
        }
        .MuiOutlinedInput-root{
            position:relative;
        }
        svg{
            position: absolute;
            bottom: 18px;
            right: 22px;
            @media(max-width:1200px){
                bottom: 16px;
            }
             @media(max-width:767px){
                bottom: 13px;
            }
        }
        .MuiButtonBase-root{
            width: 55px;
            height: 55px;
            z-index:1;
            svg{
                display:none;
            }
        }
      }
      .cust-form{
        display: flex;
        flex-direction: column;
        position:relative;
        margin-bottom:20px;
        @media(max-width:575px){
          margin-bottom:14px;
        }
        .MuiFormControl-root{
          border-color: transparent;
          &:hover{
            .MuiOutlinedInput-notchedOutline{
              border-color: #EEEEEE;
            }
          }
          .MuiOutlinedInput-notchedOutline{
            border-color: #EEEEEE;
          }
          .Mui-focused .MuiOutlinedInput-notchedOutline{
            border-width: 1px;
          }
          margin-top: 16px;
          @media(max-width:991px){
            margin-top: 10px;
          }
          .MuiOutlinedInput-root{
            border-radius: 10px;
            background-color: #fff;
            .MuiSelect-select{
              font-family: 'Poppins', sans-serif;
              letter-spacing: -0.01px;
              color: hsl(0deg 0% 44%) !important;
              font-size: 13px;
              padding: 17.5px 20px;
              @media(max-width:1200px){
                padding: 14px 20px;
              }
              @media(max-width:767px){
                padding: 12.5px 20px;
              }
            }
          }
        }
        label{
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
          color: #676767;
          font-family: 'Poppins', sans-serif;
          @media(max-width:1200px){
            font-size: 16px;
          }
           @media(max-width:767px){
            font-size: 14px;
          }
        }
        input{
          width: 450px;
          height: 56px;
          border: 1px solid #EEEEEE;
          border-radius: 10px;
          outline:none;
          font-family: 'Poppins', sans-serif;
          padding: 0 20px;
          font-size: 12px;
          font-weight: 500;
          background-color:#fff;
          color: #838383;
          ::placeholder{
            color: #838383;
            font-size: 12px;
            font-weight: 500;
            opacity:1;
          }
           @media(max-width:1650px){
            width: 350px;
          }
          @media(max-width:1200px){
            width:100%;
            height: 50px;
          }
          @media(max-width:767px){
            height: 46px;
          }
        }
      }
    }
    .vehicle-wrap{
        text-align: end;
        margin-top: 75px;
        @media(max-width:425px){
          margin-top: 45px;
        }
        button{
          background: #FF4B4B;
          border-radius: 100px;
          width: 268px;
          text-transform: capitalize;
          height: 60px;
          font-family: 'Poppins';
          font-weight: 700;
          color: #FFFFFF;
          font-size: 16px;
          @media(max-width:575px){
            width:100%;
            font-size: 14px;
            height: 56px;
          }
        }
      }
  }
`;
export default NewEstimateStyle;