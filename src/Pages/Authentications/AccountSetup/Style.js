import styled from "styled-components";

const Accoutstyle = styled.div`
height: 100vh;
.main_accout{
    background-color: #F9F9F9;
    height: 100%;
    padding: 118px 0;
    box-sizing: border-box;
    width: 100%;
    @media (max-width:991px){
           padding: 0 30px;
    }
    @media (max-width:767px){
        padding: 50px 30px 60px;
    }
    @media (max-width:575px){
       padding: 30px 12px;
    }
    .account_setup{
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 840px;
        background-color: #fff;
        box-shadow: 0px 25px 50px -12px rgba(109, 176, 255, 0.25);
        border-radius: 14px;
        padding: 40px 40px 50px 40px;
        box-sizing: border-box;
        @media (max-width:991px){
            width: 100%;
        }
        @media (max-width:767px){
            transform: initial;
            left: initial;
            top: initial;
            height: 100%;
            overflow: auto;
        }
        @media (max-width:575px){
            padding: 20px 12px;
        }
    }
    .logo_img h3{
        font-size: 14px;
        font-weight: 600;
        color: #000000;
        margin: 24px 0 30px;
    }
    .form_main{
        .input_text_field{
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            @media (max-width:767px){
                display: block;
            }
        }
        .input_name{
            width: 50%;
            @media (max-width:767px){
                width: 100%;
            }
            :nth-child(1){
                margin-right: 50px;
                @media (max-width:767px){
                    margin-bottom: 30px;
                }
            }
            span{
                display: block;
                font-size: 16px;
                font-weight: 700;
                color: #575757;
                margin-bottom: 11px;
            }
        .input_text{
            width: 100%;
            input{
                padding: 19px 0px 20px 20px;
                border: 1px solid rgba(0,0,0,0.1);
                border-radius: 10px;
                font-weight: 500;
                color: #838383;
                &::placeholder{
                    color: #838383;
                    font-weight: 500;
                    opacity:1;
                font-size: 12px;
                }
                @media (max-width:575px){
                    padding: 14px 0 14px 20px;
                }
                @media (max-width:424px){
                    padding: 10px 0 10px 20px;
                }
            }
            .MuiOutlinedInput-notchedOutline{
                border: none;
            }
        }
        }
    }
    .sign_in{
        text-align: center;
        margin: auto;
        margin-top: 80px;
        background-Color: #FF4B4B;
        padding: 19px 37px;
        width: 265px;
        border-radius: 100px;
        @media (max-width:575px){
            width: 230px;
            margin-top: 30px;
            padding: 18px;
        }
        a{
            color:#fff;
            font-size: 16px;
            font-weight: 700;
            text-transform :capitalize !important ;
            margin : auto ;
            box-shadow: none;
            text-decoration: none;
             @media (max-width:991px){
                padding: 15px 30px;
             }
            @media (max-width:575px){
                font-size: 14px;
            }
        }
    }
}`
export default Accoutstyle;

