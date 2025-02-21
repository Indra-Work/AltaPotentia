import styled from "styled-components";
import main_bg from '../../../Assets/Images/bgimage.png';

const LoginStyle = styled.div`
.login_main{
    background: url(${main_bg}) center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    @media (max-width:1024px){
        padding: 65px 0;
        height:calc(100vh - 130px)
    }
    @media (max-width:767px){
        padding: 50px 0;
        height:calc(100vh - 100px)
    }
    @media (max-width:575px){
        padding: 70px 0;
        height:calc(100vh - 140px)
    }
    @media (max-width:425px){
        padding: 30px 0;
        height:calc(100vh - 60px)
    }
    .account_create{
        height: 100%;
    }
    .content_main{
        position: relative;
        transform: translateY(-50%);
        right: 100px;
        margin-left: auto;
        padding: 35px 30px;
        background-color: #fff;
        top:50%;
        width: 500px;
        box-sizing: border-box;
        box-shadow: 0px 25px 50px -12px rgba(109, 176, 255, 0.25);
        border-radius: 14px;
        @media (max-width:1024px){
            margin:0 auto;
            right:0;
            overflow-y: auto;
            height: 100%;
        }
        @media (max-width:575px){
            width: calc(100% - 40px);
            margin: 0 20px;
        }
        @media (max-width:425px){
            width: calc(100% - 20px);
            margin: 0 10px;
        }
        .create_account_main{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3{
                font-size: 32px;
                font-weight: 700;
                color: #000000;
                margin: 0;
                letter-spacing: 0.1em;
                @media (max-width:575px){
                    font-size: 25px;
                }
                @media (max-width:424px){
                    font-size: 20px;
                }
            }
            .logo_img{
                img{
                    @media (max-width:575px){
                        width: 40px;
                    }
                }
            }
        }
        .email_box{
            margin-top: 35px;
            @media (max-width:575px){
                margin-top: 20px;
            }
            span{
                display: block;
                font-weight: 700;
                font-size: 16px;
                color: #575757;
                margin-bottom: 10px;
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
            .input_email{
                    width: 100%;
                    padding: 13px 40px 13px 20px;
                    border: 1px solid rgb(191 183 183 / 20%);;
                    border-radius: 8px;
                    box-sizing: border-box;
                    @media (max-width:575px){
                        padding: 10px 15px;
                    }
                    input{
                            &::placeholder{
                                color: #838383;
                                font-weight: 500;
                                opacity:1;
                                font-size: 12px;
                            }
                    }
            }
            .MuiOutlinedInput-notchedOutline{
                border: none;
            }
            .MuiOutlinedInput-input{
                    padding: 0;

            }
        }
        .passowrd{
            margin-top: 20px;
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
        .check_box{
            span{
                font-weight: 500;
                font-size: 12px;
                color:  #838383;
                padding: 0 8px 0 0;
                a{
                    color: #3C569E;
                    font-weight:700;
                    padding-left:3px
                }
            }
        }
        .spacer{
            margin-top: 30px;
        }
        .sign_in{
            margin-top: 30px;
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
                text-decoration: none;
                color: #fff;
                @media (max-width:575px){
                    width: 185px;
                    height: 50px;
                    font-size: 14px;
                }
            }
        }
        .create{
            margin-top: 50px;
        }
        .or_name{
            text-align: center;
            margin: 23px 0;
            @media (max-width:425px){
                margin: 15px 0;
            }
            h3{
            font-size: 12px;
            font-weight: 400;
            color: #575757;
            position: relative;
            &::before{
                position: absolute;
                content: '';
                background: #575757;
                width: 116px;
                height: 1px;
                top: 50%;
                left: 20%;
                @media (max-width:575px){
                    left: 8%;
                }
                @media (max-width:425px){
                    left: 0%;
                    width: 100px;
                }
            }
            &::after{
                position: absolute;
                content: '';
                background: #575757;
                width: 116px;
                height: 1px;
                top: 50%;
                right: 20%;
                @media (max-width:575px){
                    right: 8%;
                }
                @media (max-width:425px){
                    right: 0%;
                    width: 100px;
                }
            }
            }
        }
        .button_main{
            display: flex;
            justify-content: space-between;
            @media (max-width:425px){
                display: block;
            }
            button{
                width: 130px;
                height: 46px;
                text-transform: capitalize;
                box-shadow: 0px 0px 5px rgba(87, 87, 87, 0.25);
                @media (max-width:575px){
                    width: 120px;
                }
                @media (max-width:425px){
                    width: 100%;
                    margin-bottom: 20px;
                }
                h5{
                font-weight: 600;
                font-size: 12px;
                }
                img{
                @media (max-width:575px){
                    padding-right: 7px !important;
                    width: 20px;
                }
                }
                :nth-child(1){
                    background-Color: #FFFFFF;
                    color: #000000;
                    img{
                        padding-right: 7px;
                    }
                }
                :nth-child(2){
                    background-Color: #3C579E;
                    color: #fff;
                    img{
                        padding-right: 11px;
                    }
                }
                :nth-child(3){
                    background-Color: #3BB8E4;
                    color: #fff;
                    img{
                        padding-right: 13.79px;
                    }
                }
            }
        }
        .create_account{
            margin-top: 30px;
            text-align: center;
            @media (max-width:424px){
                margin-top: 0px;
            }
            h3{
                font-weight: 700;
                font-size: 12px;
                color: #838383;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                button{
                    color: #3C569E;
                    text-decoration: none;
                    text-transform: capitalize;
                    font-weight: 700;
                    font-size: 12px;
                    padding: 0;
                    display: block;
                }
            }
        }
        .sign_have{
            @media (max-width:424px){
                margin-top: 25px;
            }
        }
        .congratulation{
            text-align: center;
            margin-top: 55px;
            @media (max-width:575px){
                margin-top: 30px;
            }
            .check_icons{
                background-Color:#49B141;
                width: 110px;
                height: 110px;
                border-radius: 200px;
                margin-bottom: 40px;
                @media (max-width:575px){
                    width: 80px;
                    height: 80px;
                }
                .check{
                    font-size :50px ;
                }
            }
            h3{
                margin: 0;
                color: #FF4B4B;
                font-size: 18px;
                color: #FF4B4B;
                font-weight: 700;
            }
            h4{
                margin: 20px 0 0;
                color: #575757;
                font-weight: 600;
                font-size: 14px;
            }
            h6{
                margin: 40px auto 0;
                color: #575757;
                font-weight: 400;
                font-size: 14px;
                color: #474747;
                max-width: 80%;
            }
        }
    }
}
`
export default LoginStyle;


