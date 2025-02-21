import styled from "styled-components";

const CustomerInfoStyle = styled.div`
    width: 100%;
    .tab-wrapper{
        padding-top:70px;
        @media(max-width:767px){
            padding-top:40px;
        }
    }
    .info-titlebar{
         margin-bottom: 40px;
        @media(max-width:575px){
            margin-bottom: 20px;
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
        svg{
            @media(max-width:424px){
                width: 16px;
            }
        }
        p{
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            @media(max-width:424px){
                font-size: 14px;
            }
        }
    }
    .info-tabs{
        background: #FCFBFB;
        padding: 50px 30px 0 25px;
        @media(max-width:1200px){
            padding: 0;
        }
        .custom-tab{
            display:flex;
            padding: 0 40px 0 45px;
            @media(max-width:1199px){
                padding: 0;
            }
            @media(max-width:576px){
                flex-wrap: wrap;
                justify-content: space-between;
            }
            a{
                color:#575757;
                position:relative;
                text-decoration: none;
                font-family: 'Poppins';
                padding: 6px;
                font-weight: 600;
                font-size: 18px;
                width: 132px;
                text-align: center;
                margin-right: 28px;
                @media(max-width:1200px){
                    font-size: 17px;
                }
                @media(max-width:1023px){
                    font-size: 15px;
                    margin-right: 6px;
                }
                @media(max-width:991px){
                    font-size: 14px;
                }
                @media(max-width:991px){
                    width: 114px;
                }
                @media(max-width:575px){
                    width: 46%;
                    min-width: 46%;
                    padding-left: 5px;
                    margin-right: 0;
                    text-align: center;
                }
                &:nth-child(3),&:nth-child(4){
                    @media(max-width:576px){
                        margin-top: 11px;
                    }
                }
            }
            .active{
                color:#FF4B4B;
                &::after{
                    content:"";
                    position:absolute;
                    background-color:#FF4B4B;
                    border-radius: 10px 10px 0px 0px;
                    position: absolute;
                    width: 141px;
                    height: 4px;
                    left: 0;
                    bottom: -4px;
                    @media(max-width:991px){
                        width: 126px;
                    }
                    @media(max-width:575px){
                        left: 10px;
                        height: 3px;
                        width: 90%;
                    }
                }
            }
        }
        .MuiTabs-indicator{
            border-radius: 10px 10px 0px 0px;
            background-color: #FF4B4B;
            height: 4px;
        }
        .tab-menubar{
            padding-bottom: 30px;
            @media(max-width:1200px){
                padding: 50px 20px 34px;
            }
            @media(max-width:575px){
                padding: 30px 16px 24px;
            }
        }
        .custom-tab-detail{
            padding: 30px 40px 0 45px;
            height: calc(100vh - 236px);
            overflow: auto;
            @media(max-width:1199px){
                padding: 0 20px 30px 20px;
            }
            @media(max-width:575px){
                padding: 14px;
            }
        }
    }
`;
export default CustomerInfoStyle;