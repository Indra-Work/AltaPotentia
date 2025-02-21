import styled from "styled-components";

const CustInfoStyle = styled.div`
  .info-details{
    .info-menu{
        h6{
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
            @media(max-width:991px){
                font-size: 22px;
            }
            @media(max-width:575px){
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
    .cust-details{
        background: #FFFFFF;
        box-shadow: 0px 1px 10px #ddd;
        border-radius: 14px;
        border-radius: 14px;
        padding: 40px;
        @media(max-width:1199px){
            padding: 20px;
        }
        .MuiGrid-root{
            @media(max-width:1199px){
                display:block;
                max-width: 100%;
            }
        }
        .add-details{
            @media(max-width:1199px){
                padding-right: 10px;
            }
             @media(max-width:991px){
                padding-right: 20px;
            }
            @media(max-width:767px){
                padding-right: 0;
            }
            h2{
                font-weight: 700;
                font-size: 22px;
                line-height: 33px;
                margin-bottom:12px;
                @media(max-width:1199px){
                    font-size: 20px;
                }
            }
            p{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                @media(max-width:1199px){
                    font-size: 14px;
                }
                @media(max-width:424px){
                    font-size: 13px;
                }
            }
            h3{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                @media(max-width:1199px){
                    font-size: 14px;
                }
            }
            h4{
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                margin-bottom:12px;
                @media(max-width:1199px){
                    font-size: 14px;
                }
            }
            .id-box{
                background: #F9F9F9;
                border-radius: 20px;
                height: 220px;
                width: 100%;
                position: relative;
                span{
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #ffffff;
                    border-radius: 0px 5px 5px 0px;
                    width: 24px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor:pointer;
                    svg{
                        width: 14px;
                        fill: #575757;
                    }
                    &:last-child{
                        left: initial;
                        right: 0;
                        border-radius: 5px 0 0 5px;
                    }
                }
            }
        }
    }
  }
  .vehicle-sect{
    margin:70px 0 50px 0;
    @media(max-width:767px){
        margin:40px 0 18px 0;
    }
    h6{
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        @media(max-width:991px){
            font-size: 22px;
        }
        @media(max-width:575px){
            font-size: 20px;
        }
    }
    .btn-newcust{
        button{
            background: #FF4B4B;
            border-radius: 14px;
            min-width: 250px;
            height: 62px;
            border: 0;
            color: #fff;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            text-transform: capitalize;
            @media(max-width:1199px){
                min-width: 200px;
                font-size: 15px;
                height: 50px;
                border-radius: 10px;
            }
            @media(max-width:767px){
                min-width: 180px;
                font-size: 14px;
            }
            @media(max-width:575px){
                min-width: 150px;
                font-size: 14px;
            }
            @media(max-width:424px){
                font-size: 12px;
                min-width: 130px;
                height: 44px;
            }
            svg{
                margin-right: 14px;
                @media(max-width:575px){
                    margin-right: 14px;
                    font-size: 8px;
                }
                @media(max-width:424px){
                    width: 16px;
                    margin-right: 8px;
                }
            }
        }
    }
  }
  .vehicleData-main{
    display: flex;
    justify-content: space-between;
    @media(max-width:767px){
        display: block;
    }
    .MuiGrid-root.MuiGrid-container{
        @media(max-width:767px){
            display: block;
        }
    }
    .MuiGrid-root .MuiGrid-item{
        max-width: 48%;
        @media(max-width:1440px){
            max-width: 49%;
        }
        @media(max-width:767px){
            max-width: 100%;
            margin-bottom:40px;
        }
    }
    .vehicle-mainData{
        background-color:#FCFBFB;
        padding: 35px 30px 20px;
        border-radius: 14px 14px 0 0;
        @media(max-width:1440px){
            padding: 25px 16px 20px;
        }
    }
    .vehicle-first{
        box-shadow: 0px 12px 50px -12px #00000040;
        background-color:#fff;
        width:48%;
        border-radius: 14px;
        @media(max-width:1440px){
            width:49%;
        }
        @media(max-width:767px){
            width:100%;
            margin-bottom:40px;
        }
        .vehicle-state{
            margin-bottom:10px;
            h4{
                font-weight: 700;
                font-size: 20px;
            }
            .MuiButton-root{
                justify-content: end;
                padding: 0;
                color:#575757;
                background: transparent;
                box-shadow: none;
                padding-right: 0;
            }
        }
        p{
            font-weight: 600;
            font-size: 16px;
            color: #575757;
            @media(max-width:1299px){
                font-size: 14px;
            }
            @media(max-width:575px){
                font-size: 12px;
            }
        }
        .vehicle-brown{
            display: flex;
            justify-content: space-between;
            margin-top: 6px;
            .vehc-carrier{
                display: flex;
                p{
                    margin-left: 12px;
                }
            }
        }
        .workorder{
            margin-top: 10px;
        }
        .velc-accordion{
            margin-top: 50px;
            padding: 0 30px 137px;
            @media(max-width:1440px){
                padding: 0 12px 80px;
            }
            @media(max-width:575px){
                margin-top: 20px;
            }
            .MuiPaper-elevation{
                margin: 16px 0;
            }
            .MuiAccordion-root{
                box-shadow:none;
                border: 1px solid #eeeeee;
            }
            .MuiButtonBase-root{
                background: #F4FFEE;
                border-radius: 5px;
            }
            .MuiAccordionSummary-content{
                align-items: center;
                justify-content: space-between;
                button{
                    border: 1px solid hsl(152deg 98% 21%);
                    border-radius: 20px;
                    color: hsl(152deg 98% 21%);
                    padding: 2px 18px;
                    font-weight: 600;
                    font-size: 12px;
                    margin-right: 24px;
                    text-transform: capitalize;
                }
            }
            .MuiAccordionSummary-root{
                min-height: 50px !important;
            }
            .MuiAccordionDetails-root{
                padding-top:20px;
                p{
                    font-weight:500;
                }
            }
            .velh-hexa{
                display: flex;
                justify-content: space-between;
                p{
                    font-weight:600;
                    color:#000;
                    &:last-child{
                        margin-top: 7px;
                    }
                }
            }
            .commerce{
                margin-top: 5px;
            }
            .vehc-commerce{
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                @media(max-width:1299px){
                    display: block;
                }
                p{
                    font-size: 12px;
                }
            }
        }
    }
  }
  .workorder-main{
    .work-order{
        border-radius: 14px;
        position: relative;
        box-shadow: 0px 12px 50px -12px rgba(0, 0, 0, 0.25);
        padding: 20px 30px 50px;
        background:#fff;
        @media (max-width:1440px){
            padding: 20px 15px;
        }
        .order-btn{
            text-align: end;
            button{
                justify-content: end;
                padding: 0;
                background:transparent;
                box-shadow:none;
            }
            svg{
                fill: #000;
            } 
        }
        .title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-weight: 700;
                font-size: 22px;
            }
            .MuiButton-root.MuiButton-text {
                display: flex;
                justify-content: end;
            }         
        }
        .price{
            margin-top: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3{
                font-weight: 700;
                font-size: 22px;
                color: #575757;
                @media (max-width:1440px){
                    font-size: 20px;
                }
                @media (max-width:1200px){
                    font-size: 18px;
                }
                @media (max-width:424px){
                    font-size: 16px;
                }
                span{
                    font-weight: 600;
                    font-size: 18px;
                    @media (max-width:1440px){
                        font-size: 16px;
                    }
                    @media (max-width:424px){
                        font-size: 14px;
                    }
                }
            }
            h4{
                font-weight: 600;
                font-size: 20px;
                @media (max-width:1200px){
                    font-size: 18px;
                }
                @media (max-width:424px){
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
            margin-top: 20px;

            h5{
                font-weight: 500;
                font-size: 16px;
                color: #575757;
                @media (max-width:424px){
                    font-size: 14px;
                }
            }
            >div{
                display: flex;
                align-items: center;
                margin-top: 20px;
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
                        color: #016938 !important;
                        p{
                            font-weight: 500;
                            color: #016938 !important;
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
            margin-top: 30px;
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
                    @media(max-width:424px){
                        font-size: 12px;
                    }
                    svg{
                        width: 7px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}
.main-estimate{
    padding-bottom: 60px;
    @media(max-width:991px){
        padding-bottom: 0;
    }
    >.title{
        font-weight: 700;
        font-size: 24px;
        color: #575757;
        margin-bottom: 71px;
    }
    .order-btn{
        text-align: end;
        button{
            justify-content: end;
            padding: 0;
            background:transparent;
            box-shadow:none;
        }
        svg{
            fill: #000;
        } 
    }
    .MuiGrid-root.MuiGrid-container{
        justify-content: space-between;
    }
    .MuiGrid-root .MuiGrid-item{
        max-width: 48%;
        @media(max-width:1440px){
            max-width: 49%;
        }
        @media(max-width:767px){
            max-width: 100%;
        }
    }
    .box-main{
        .sec-1{
            background: #FFFFFF;
            box-shadow: 0px 12px 50px -12px rgba(0, 0, 0, 0.25);
            border-radius: 14px;
            @media(max-width:767px){
                margin-bottom: 40px;
            }
            >.title{
                border-radius: 14px 14px 0 0;
                padding: 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #FCFBFB;
                @media (max-width:1440px) {
                    padding: 25px 16px 20px;
                }
                @media (max-width:424px) {
                    padding: 15px 20px;
                }
                >h5{
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 20px;
                    @media (max-width:425px) {  
                        font-size: 16px;
                    }
                    span{
                        margin-left: 5px;
                        font-weight: 500;
                        font-size: 18px;
                        color: #575757;
                        @media (max-width:424px) {  
                            font-size: 16px;
                        }
                        @media (max-width:424px) {  
                            font-size: 14px;
                        }
                    }
                }
                .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium{
                    fill: #575757;
                }
            }
            .content-sec{
                padding: 20px 30px;
                @media (max-width:1440px) {  
                    padding: 12px 20px;
                }
                @media (max-width:1200px) {  
                    padding: 12px;
                }
                .id-info{
                    display: flex;
                    justify-content: space-between;
                    .info-1{
                        h3{
                            font-weight: 700;
                            font-size: 22px;
                            color: #575757;
                            @media (max-width:1440px) {
                                font-size: 20px;
                            }
                            @media (max-width:1200px) {
                                font-size: 18px;
                            }
                            @media (max-width:424px) {
                                font-weight: 600;
                                font-size: 16px;
                            }
                        }
                        h4{
                            margin-top: 3px;
                            font-weight: 500;
                            font-size: 16px;
                            color: #016938;
                            @media (max-width:424px) {  
                                font-size: 14px;
                            }
                        }
                    }
                    .info-2{
                        text-align: right;
                        h3{
                            font-weight: 600;
                            font-size: 20px;
                             @media (max-width:1200px) {  
                                font-size: 18px;
                            }
                            @media (max-width:424px) {  
                                font-size: 16px;
                            }
                        }
                        h4{
                            font-weight: 500;
                            font-size: 16px;
                            color: #575757;
                             @media (max-width:1200px) {  
                                font-size: 14px;
                            }
                            @media (max-width:424px) {  
                                font-size: 14px;
                            }
                        }
                    }
                }
                .document-sec{
                    margin-top: 15px;
                    display: flex;
                    justify-content: space-between;
                    @media screen and  (max-width:1200px) and (min-width:991px) {  
                        justify-content: unset;
                        display: block;
                    }
                    @media (max-width:424px) {  
                        justify-content: unset;
                        display: block;
                    }
                    .content{
                        h5{
                            font-weight: 500;
                            font-size: 16px;
                            color: #575757;
                            @media (max-width:1200px) {
                                font-size: 14px;
                            }
                            &:last-child{
                                margin-top: 8px;
                                @media (max-width:424px) {
                                    margin-top: 4px;
                                }
                            }
                        }
                    }
                    .pdf-sec{
                        background: #F9F9FF;
                        border: 1px solid #F9F9FF;
                        border-radius: 5px;
                        padding: 11px 6px 6px 15px;
                        @media screen and  (max-width:1200px) and (min-width:991px) {  
                            margin-top: 10px;
                        }
                        @media (max-width:424px) {  
                            margin-top: 10px;
                        }
                        >div{
                            display: flex;
                            justify-content: end;
                            Button{
                                width: max-content;
                                padding: 0;
                                min-width: unset;
                                &:first-child{
                                    margin-right: 10px;
                                }
                            }
                        }
                        .date-pdf{
                            margin-top: 35px;
                            display: flex;
                            @media screen and  (max-width:1200px) and (min-width:991px) {  
                                justify-content: start;
                                margin-top: 10px;
                            }
                            @media (max-width:424px) {  
                                margin-top: 10px;
                                justify-content: start;
                            }
                            Button{
                                margin-right: 13px !important;
                            }
                            .content{
                                h5{
                                    font-weight: 600;
                                    font-size: 14px;
                                    color: #575757;
                                }
                                h6{
                                    font-weight: 400;
                                    color: #575757;
                                    font-size: 10px;
                                }
                            }
                        }
                    }
                }
                .add-attachments{
                    margin-top: 40px;
                    >.title{
                        h3{
                            font-weight: 600;
                            font-size: 16px;
                            color: #575757;
                        }
                    }
                    .attachment-1{
                        margin-top: 20px;
                        padding: 15px 29px 20px 18px;
                        background: #F9F9FF;
                        border: 1px solid #F9F9FF;
                        border-radius: 5px;
                        display: flex;
                        justify-content: space-between;
                        >div{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            img{
                                width: 24px;
                                height: 31px;
                            }
                            .content{
                                margin-left: 17px;
                                @media (max-width:1200px) {  
                                    margin-left: 10px;
                                }
                                h4{
                                    font-weight: 600;
                                    font-size: 14px;
                                    color: #575757;
                                    @media (max-width:1200px) {  
                                        font-size: 12px;
                                    }
                                }
                                h5{
                                    font-weight: 400;
                                    font-size: 10px;
                                    color: #575757;
                                    margin-top: 5px;
                                }
                            }
                        }
                        .print-send{
                            Button{
                                min-width: unset;
                                padding: 0;
                                img{
                                    width: 20px;
                                    height: 18px;
                                    margin-right: 17px;
                                }
                                &:last-child{
                                    img{
                                        width: 17px;
                                        height: 17px;
                                        margin-right: 0;
                                    }
                                }
                            }

                        }
                        &:last-child{
                            margin-top: 15px;
                        }
                    }
                }
            }
        }
    }
}
`;
export default CustInfoStyle;