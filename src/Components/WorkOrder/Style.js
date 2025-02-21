import styled from "styled-components";

const OrderInfoStyle = styled.div`
.customer-main{
    display: flex;
    height: 100vh;
}
.menu-open{
    .sidebar-wrapper{
        width: 300px;
        opacity:1;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 9;
        background-color: #fff;
    }
}
.main-order-info{
    width: 100%;
    height: fit-content;
    overflow-x: hidden;
    .info-titlebar{
        padding: 50px 30px 0 20px;
        @media(max-width:375px){
            display:block;
        }
        h2{
            font-weight: 700;
            font-size: 22px;
            line-height: 33px;
            margin-left: 25px;
            @media(max-width:575px){
                margin-left: 8px;
                line-height: 18px;
                font-size: 16px;
            }
        }
        svg{
            @media(max-width:575px){
                width: 16px;
            }
        }
        p{
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            @media(max-width:575px){
                font-size: 14px;
            }
            @media(max-width:375px){
                margin-top: 10px;
            }
        }
    }
    .info-estimate{
        margin-top: 44px;
        padding: 0 60px;
        @media (max-width: 1200px) {
            padding: 0 30px;
        }
        @media (max-width: 575px) {
            padding: 0 20px;
        }
        .estimate-title{
            width: 237px;
            margin-bottom: 60px;
            text-align: center;
            p{
                font-weight: 600;
                font-size: 18px;
                color: #FF4B4B;
            }
            div{
                margin-top: 6px;
                height: 4px;
                background: #FF4B4B;
                border-radius: 10px 10px 0px 0px;
            }
        }
        .work-order{
            border-radius: 14px;
            position: relative;
            box-shadow: 0px 12px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 50px 40px;
            @media (max-width:575px){
                padding: 20px 15px;
            }
            .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 700;
                    font-size: 22px;
                    @media (max-width:575px){
                        font-size: 20px;
                    }
                }
                svg{
                    fill: #575757;
                } 
                .MuiButton-root {
                    background: transparent;
                    box-shadow: none;
                    padding-right: 0;
                    justify-content: end;
                }
            }
            .price{
                margin-top: 40px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                h3{
                    font-weight: 700;
                    font-size: 22px;
                    color: #575757;
                    @media (max-width:575px){
                        font-size: 18px;
                    }
                }
                h4{
                    font-weight: 600;
                    font-size: 20px;
                    @media (max-width:575px){
                        font-size: 16px;
                    }
                }
            }
            .open_box{
                outline: none;
                background-color: unset;
                border: none;
                font-weight: 500;
                font-size: 16px;
                color: #016938;
                padding: 0;
            }
            .saler-dispatch{
                margin-top: 15px;
                h5{
                    font-weight: 500;
                    font-size: 16px;
                    color: #575757;
                }
                p{
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 21px;
                    span{
                        font-weight: 700;
                    }
                }
                >div{
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
                    .dot{
                        width: 20px;
                        height: 20px;
                        background: #016938;
                        border-radius: 50px;
                        margin-right: 10px;
                        @media(max-width:424px){
                            width: 12px;
                            height: 12px;
                            margin-right: 5px;
                        }
                    }
                    .select-dispatch{
                        .MuiSelect-select.MuiSelect-outlined{
                            padding: 0;
                            width: 185px;
                            color: #016938;
                            p{
                                font-weight: 500;
                            }
                        }
                        .MuiOutlinedInput-notchedOutline{
                            border: 0;
                        }
                        .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium{
                            fill: #016938;
                        } 
                    }
                }
            }
            .repair-description{
                margin-top: 35px;
                @media(max-width:424px){
                    margin-top: 15px;
                }
                h4{
                    font-weight: 600;
                    font-size: 16px;
                    color: #575757;
                }
                .content{
                    margin-top: 20px;
                    p{
                        font-weight: 400;
                        font-size: 13px;
                        color: #575757;
                        display: flex;
                        align-items: center;
                        margin-top: 7px;
                        svg{
                            width: 7px;
                            margin-right: 10px;
                        }
                    }
                }
            }
            .position-btn{
                position: absolute;
                cursor: pointer;
                top: 30px;
                right: -8%;
                transform: translateX(100%);
                outline: none;
                background: unset;
                border: none;
                padding: 0;
                div{
                    border-radius: 30px 0px 0px 30px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                    background-color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    width: 79px;
                    height: 50px;
                    svg{
                        font-size: 20px;
                        color: #575757;
                    }
                }
                @media (max-width:1200px) {
                    right: -3%;
                }
                @media (max-width:899px) {
                    display: block;
                }
                @media (max-width:575px) {
                    right: -6%;
                }
                @media (max-width:424px) {
                    right: -5%;
                }
            }
        }
    }
    .note-category{
        box-shadow: 0px 12px 50px -12px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        padding: 30px 25px;
        position: relative;
        @media (max-width:899px){
            box-shadow:none;
        }
        @media (max-width:375px){
            padding: 30px 20px;
        }
        .title{
            h4{
                font-weight: 700;
                font-size: 18px;
                color: #575757;
            }
        }
        .select-dispatch{
            margin-top: 16px;
            .MuiSelect-select.MuiSelect-outlined{
                padding: 17px 20px;
                width: 100%;
                color: #575757;
                p{
                    font-weight: 500;
                }
            }
            .MuiOutlinedInput-notchedOutline{
                border: 1px solid #EEEEEE;
                border-radius: 10px;
            }
            .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium{
                fill: #575757;
                font-size: 33px;
            } 
        }
        .text-area{
            display: flex;
            margin-top: 25px;
            textarea{
                resize: none;
                height: 194px;
                width: 100%;
                background: #FCFBFB;
                border: none;
                padding: 20px;
                border-radius: 10px;
                &::placeholder{
                    font-weight: 500;
                    font-size: 14px;
                    color: #575757;
                    font-family: 'poppins';
                }
                &:focus-visible{
                    outline: none;
                }
            }
        }
        .border{
            background: #FF4B4B;
            border-radius: 10px;
            height: 4px;
            width: 100%;
            margin: 20px 0;
        }
        .recent-notes{
            display: flex;
            flex-wrap: wrap;
            >h5{
                font-weight: 600;
                font-size: 16px;
                color: #575757;
                margin-bottom: 16px;
            }
            .detail{
                padding: 12px 15px 15px 15px;
                background: #FCFBFB;
                border-radius: 10px;
                width: 100%;
                h6{
                    font-weight: 600;
                    font-size: 12px;
                    color: #575757;
                }
                p{
                    margin-top: 17px;
                    font-weight: 400;
                    font-size: 11px;
                    color: #676767;
                }
                div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                    @media screen and (max-width:1200px) and (min-width:991px){
                        display: block;
                    }
                    @media (max-width:375px){
                        display: block;
                    }
                    h3{
                        font-weight: 600;
                        font-size: 12px;
                        color: #575757;
                    }
                    h4{
                        font-weight: 500;
                        font-size: 12px;
                        color: #676767;
                        @media (max-width:375px){
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
        .none{
            display: none;
        }
        .arrow-position{
            cursor: pointer;
            position: absolute;
            top: 15px;
            left: -42px;
            outline: none;
            border: none;
            z-index: 9990;
            background-color: unset;
            @media(max-width:899px){
                display: none;
            }
            >div{
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                border-radius: 30px;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                svg{
                    color: #575757;
                    font-size: 20px;
                }
            }
        }
    }
    .rm-padding{
        margin-bottom: 60px;
        @media(max-width:900px){
            margin-bottom: 30px;
        }
        @media(max-width:425px){
            padding-top: 10px;
        }
    }
    .none{
        display: none;
    }
    .fixed-note{
        padding-bottom: 50px;
        @media (max-width:899px) {
            position: fixed;
            top: 0;
            right: 00px;
            width: 400px;
            z-index: 99;
            padding: 0;
            background: white;
            overflow-y: scroll;
            height: 100%;
            box-shadow: 0px 12px 50px -12px rgb(0 0 0 / 25%);
            @media (max-width:425px) {
                width: 93%;
            }
        }
    }
    .arrow-position2{
        display: none;
        cursor: pointer;
        position: fixed;
        top: 15px;
        right: 375px;
        outline: none;
        border: none;
        z-index: 9990;
        background-color: unset;
        @media(max-width:899px){
            display: block;
        }
        @media(max-width:424px){
            display: block;
            left: -4px;
            right: unset;
        }
        >div{
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            @media(max-width:424px){
                width: 33px;
                height: 33px;
            }
            svg{
                color: #575757;
                @media(max-width:424px){
                    font-size: 16px;
                }
            }
        }
    }
    .arrow-none{
        display: none !important;
    }
}
`

export default OrderInfoStyle;