import styled from "styled-components";

const Forgotstyle = styled.div`
.forgot_main{
    background:  #FCFBFB;
    height: calc(100vh - 200px);
    padding: 100px 0;
    @media (max-width:575px){
        padding: 10px 0;
        height: calc(100vh - 20px);
    }
    .content_main{
        position: relative;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        padding: 35px 30px;
        background-color: #fff;
        width: 500px;
        box-sizing: border-box;
        height: 100%;
        overflow: auto;
        box-shadow: 0px 25px 50px -12px rgba(109, 176, 255, 0.25);
        border-radius: 14px;
        @media (max-width:575px){
            width: calc(100% - 40px);
            height: calc(100% - 20px);
            padding: 10px 15px;
        }
        .header_main{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .back_button{
                button{ 
                    background-color: #fff;
                    box-shadow: 0px 0px 25px -12px rgba(0, 0, 0, 0.25);
                    border-radius: 30px;
                    width: 60px;
                    height: 60px;
                    min-width: auto;
                    @media (max-width:575px){
                        width: 50px;
                        height: 50px;
                    }
                    img{
                        height: 20px;
                        width: 27px;
                        color: #838383;
                        @media (max-width:575px){
                            width: 22px;
                            height: 15px;
                        }
                    }
                }
            }
            .icons{
                img{
                    width: 23px;
                }
            }
        }
        .create_account_main{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        .content{
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3{
                font-size: 32px;
                font-weight: 600;
                color: #575757;
                margin: 0;
                @media (max-width:575px){
                    font-size: 25px;
                }
                @media (max-width:424px){
                    font-size: 20px;
                }
            }
        }
        .email_box{
            margin-top: 60px;
            @media (max-width:575px){
                margin-top: 20px;
            }
            span{
                display: block;
                font-weight: 700;
                font-size: 16px;
                color: #575757;
                margin-bottom: 15px;
            }
            .input_email{
                    width: 100%;
                    padding: 15px 20px;
                    border: 1px solid rgb(191 183 183 / 20%);
                    border-radius: 8px;
                    box-sizing: border-box;
                    font-weight: 500;
                   input{
                       &::placeholder{
                        color: #838383;
                        font-weight: 500;
                        opacity:1;
                        }
                   }
                    @media (max-width:575px){
                        padding: 10px 15px;
                    }
            }
            .MuiOutlinedInput-notchedOutline{
                border: none;
            }
            .MuiOutlinedInput-input{
                padding: 0;
                font-size: 12px;
                color: #838383;
            }
            .link{
                background-color: #F7FEF9;
                font-size: 12px;
                font-weight: 600;
                color: #838383;
                width: 440px;
                height: 67px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                @media (max-width:575px){
                    width: 100%;
                    text-align: center;
                }
            }
            .password{
                position: relative;
                .eye_icons{
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #838383;
                    width: 20px;
                    height: 18px;
                }
            }
        }
        .re-enter{
            margin-top: 30px;
        }
        .forgot{
            margin: 15px 0 25px;
            a{
                color: #838383;
                display: flex;
                align-items: center;
                font-size: 12px;
                font-weight: 500;
                img{
                    margin-right: 8px;
                }
            }
        }
        .spacer{
            margin-top: 30px;
        }
        .sign_in{
            margin-top: 75px;
            text-align: center;
            button{
                background-Color: #FF4B4B;
                border-radius: 100px;
                width: 265px;
                height: 60px; 
                font-size: 16px;
                font-weight: 700;
                text-transform :capitalize !important;
                margin : auto;
                box-shadow: none;
                @media (max-width:575px){
                    width: 185px;
                    height: 50px;
                    font-size: 14px;
                }
            }
            a{
                background-Color: #FF4B4B;
                border-radius: 100px;
                width: 265px;
                height: 60px; 
                font-size: 16px;
                font-weight: 700;
                text-transform :capitalize !important;
                margin : auto ;
                box-shadow: none;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                text-decoration: none;
                @media (max-width:575px){
                    width: 185px;
                    height: 50px;
                    font-size: 14px;
                }
            }
        }
    }
}`
export default Forgotstyle;