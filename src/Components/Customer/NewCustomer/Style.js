import styled from "styled-components";

const NewCustomerStyle = styled.div`
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
      margin-top: 0;
      border-radius: 0;
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
            line-height: 18px;
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
      .cust-form{
        display: flex;
        flex-direction: column;
        margin-bottom:20px;
        @media(max-width:575px){
          margin-bottom:14px;
        }
        .MuiFormControl-root{
          border-color: transparent;
          &:hover{
            .MuiOutlinedInput-notchedOutline{
              border-color: transparent;
            }
          }
          .MuiOutlinedInput-notchedOutline{
            border-color: transparent;
          }
          .Mui-focused .MuiOutlinedInput-notchedOutline{
            border-width: 1px;
          }
          margin-top: 16px;
          @media(max-width:991px){
            margin-top: 10px;
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
          font-size: 14px;
          background-color:#fff;
          color:#575757;
          ::placeholder{
            color:#575757;
            font-weight: 400;
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
        .cust-btn{
          margin-top:16px;
          border-radius: 10px;
          height: 56px;
          @media(max-width:1200px){
            height: 50px;
          }
          @media(max-width:991px){
            margin-top: 10px;
          }
           @media(max-width:767px){
            height: 46px;
          }
          button{
            width:50%;
            height: 56px;
            text-transform: capitalize;
            border-radius: 10px;
            color: #575757;
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            background: #FFFFFF;
            border: 1px solid #EEEEEE;
            font-family: 'Poppins', sans-serif;
            @media(max-width:1200px){
              height: 50px;
            }
             @media(max-width:767px){
              height: 46px;
            }
          }
          button.Mui-selected{
            background: #FF4B4B;
            color: #FFFFFF;
          }
          .cust-yesbtn{
            border-radius: 10px 0 0 10px;
          }
          .cust-nobtn{
            border-radius: 0 10px 10px 0;
          }
        }  
      }
    }
  }
`;
export default NewCustomerStyle;