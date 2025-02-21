import styled from "styled-components";

const EstimatesStyle = styled.div`
.estimate-wrap{
    .cust-wrapper{
        width: 100%; 
    }
    .prelim-num{
        font-weight: 500;
        font-size: 11px;
    }
    .active-data{
        justify-content: start !important;
        margin-left: 8px !important;
    }
    .repair-wrap{
        width: 224px;
    }
    .MuiTableCell-root{
        .MuiInput-root{
            &::before{
                border: 0;
            }
        }
    }
    .MuiSelect-root:hover:not(.Mui-disabled):before{
        border: 0;
    }
    .MuiInput-input:focus{
        background:transparent;
    }
    .MuiInput-root::after {
        border-bottom:0;
    }
}
.customer-main{
    display: flex;
    height: 100vh;
    }
    .cust-wrapper{
        height:100vh;
        overflow:auto;
        background: #FCFBFB;
    }
    .customer-wrap{
        padding: 46px 50px 0 50px;
        @media(max-width:1199px){
            padding: 30px 20px 0 20px;
        }
        @media(max-width:991px){
            padding: 46px 30px 0 30px;
        }
        @media(max-width:767px){
            padding: 30px 20px 0 20px;
        }
        @media(max-width:424px){
            padding: 30px 15px 0 15px;
        }
        .customer-head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media(max-width:599px){
                display:block;
            }
            .search-sect{
                display: flex;
                align-items: center;
                svg.show-sidemenu{
                    display:none;
                    margin-right: 10px;
                    cursor: pointer;
                    fill: #a7a7a7;
                    @media(max-width:991px){
                        display:block;
                    }
                }
                .search-detail{
                    position: relative;
                    @media(max-width:599px){
                        width: 100%;
                    }
                    .search-icon svg{
                        position: absolute;
                        left: 33px;
                        top: 31px;
                        z-index: 1;
                        @media(max-width:1199px){
                            top: 20px;
                        }
                        @media(max-width:767px){
                            left: 16px;
                            width: 18px;
                        }
                    }
                    .filter-icon svg{
                        position: absolute;
                        right: 33px;
                        top: 31px;
                        @media(max-width:1199px){
                            top: 20px;
                            right: 24px;
                        }
                        @media(max-width:767px){
                            right: 20px;
                            width: 15px;
                        }
                    }
                    .MuiAutocomplete-popper{
                        .MuiAutocomplete-paper{
                            border-radius: 10px;
                            box-shadow: 0px 1px 10px #ddd;
                            .MuiAutocomplete-option.Mui-focused{
                                background-color: rgb(255 244 244);
                            }
                            .MuiAutocomplete-option{
                                color: #575757;
                                font-weight: 500;
                                font-family: 'Poppins', sans-serif !important;
                            }
                        }
                    }
                    .MuiAutocomplete-root{
                        @media(max-width:1439px){
                            width: 480px;
                        }
                        @media(max-width:1199px){
                            width: 400px;
                        }
                        @media(max-width:767px){
                            width: 320px;
                        }
                        @media(max-width:599px){
                            width: 100%;
                        }
                        .MuiOutlinedInput-root{
                            height: 80px;
                            background-color: #fff;
                            border-radius: 50px;
                            color: #A7A7A7;
                            font-weight: 600;
                            font-size: 16px;
                            font-family: 'Poppins', sans-serif !important;
                            @media(max-width:1199px){
                                height: 60px;
                            }
                            .MuiAutocomplete-endAdornment{
                                .MuiButtonBase-root{
                                    svg{
                                        display:none;
                                    }
                                }
                            }
                            input{
                                padding: 7.5px 30px 7.5px 55px;
                                flex-grow: 0;
                                width: 390px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                @media(max-width:1439px){
                                    font-size:14px;
                                    width: 240px;
                                }
                                @media(max-width:1199px){
                                    width: 170px;
                                }
                                @media(max-width:767px){
                                    padding-left: 36px;
                                    width: 120px;
                                }
                                @media(max-width:599px){
                                    width: calc(100% - 118px);
                                }
                            }
                            .MuiAutocomplete-clearIndicator{
                                display:none;
                            }
                            .MuiAutocomplete-popupIndicator{
                                margin-right: 60px;
                                @media(max-width:767px){
                                    margin-right: 36px;
                                }
                            }
                            fieldset{
                                border: 0;
                            }
                        }
                    }
                    .search-byname{
                        position: absolute;
                        top: 15px;
                        right: 64px;
                        @media(max-width:1199px){
                            top:5px;
                            right: 48px;
                        }
                        @media(max-width:767px){
                            right: 38px;
                        }
                        .MuiInput-root{
                            &:before,&:after{
                                border:0;
                            }
                            .MuiSelect-select{
                                background:transparent;
                                color:#A7A7A7;
                                font-family: 'Poppins', sans-serif !important;
                                font-weight: 500;
                                font-size: 14px;
                            }
                        }
                    }
                    .MuiAutocomplete-popper{
                        width: 470px !important;
                        transform: translate3d(5px, 82px, 0px) !important;
                        @media(max-width:1199px){
                            width: 390px !important;
                            transform: translate3d(5px, 62px, 0px) !important;
                        }
                        @media(max-width:767px){
                            width: 310px !important;
                        }
                        @media(max-width:600px){
                            width: 99% !important;
                        }
                        ul{
                            li{
                                font-size: 14px;
                                @media(max-width:767px){
                                    font-size: 13px;
                                }
                            }
                        }
                    }
                }
            }
            .btn-newcust{
                @media(max-width:599px){
                    margin-top:20px;
                }
                button{
                    background: #FF4B4B;
                    border-radius: 14px;
                    min-width: 283px;
                    height: 70px;
                    border: 0;
                    color: #fff;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    text-transform: capitalize;
                    @media(max-width:1439px){
                        min-width: 240px;
                    }
                    @media(max-width:1199px){
                        min-width: 200px;
                        font-size: 15px;
                        height: 60px;
                    }
                    @media(max-width:767px){
                        min-width: 180px;
                        font-size: 14px;
                    }
                    @media(max-width:424px){
                        height: 50px;
                        border-radius: 10px;
                    }
                    svg{
                        margin-right: 14px;
                    }
                }
            }
        }
        .sort-sect{
            display: flex;
            align-items: center;
            margin: 20px 0 15px 0;
            p{
                font-weight: 700;
                font-size: 14px;
                color: #FF4B4B;
                margin-right: 20px;
            }
            .date-active{
                background: #FF4B4B;
                color: #fff;
            }
            button{
                border-radius: 50px;
                background: #fff;
                color: #FF4B4B;
                font-weight: 500;
                font-size: 14px;
                text-transform: initial;
                border: 0;
                padding: 8px 32px;
                margin-right:20px;
                @media(max-width:424px){
                    padding: 8px 18px;
                    margin-right: 10px;
                    font-size: 13px;
                }
                &:hover{
                    background: #FF4B4B;
                    color: #fff;
                }
            }
        }
        .MuiTableContainer-root{
            box-shadow: none;
            background-color: #fcfbfb;
            margin-bottom: 75px;
            table{
                border-collapse: separate;
                border-spacing: 0 15px;
            }
            thead th{
                font-family: 'Poppins', sans-serif !important;
                background: #EFEEEE;
                color: #575757;
                font-weight: 600;
                font-size: 18px;
                @media(max-width:424px){
                    font-size: 16px;
                }
                &:first-child{
                    border-top-left-radius: 10px;
                }
                &:last-child{
                    border-top-right-radius: 10px;
                }
            }
            tbody{
                &:before{
                    content: "";
                    display: block;
                    line-height: 10px;
                }
                td{
                    padding:16px 16px 12px 16px;
                    p{
                        color: #016938;
                        font-weight: 500;
                        font-size: 11px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            margin: 0 2px 0 -7px;
                        }
                    }
                    span.record-count{
                        width: 26px;
                        height: 26px;
                        background: #FF4B4B;
                        border-radius: 50%;
                        font-weight: 600;
                        font-size: 12px;
                        color: #fff;
                        display: inline-block;
                        text-align: center;
                        vertical-align: middle;
                        line-height: 26px;
                        opacity:0;
                        float: right;
                    }
                }
            }
            tbody tr{
                & td:nth-child(3),& td:nth-child(4){
                    font-weight: 600;
                    font-size: 16px;
                }
                & td:nth-child(2),& td:nth-child(5),& td:nth-child(6){
                    font-weight: 600;
                    font-size: 15px;
                }
                &:hover{
                    td .record-count{
                        opacity:1;
                    }
                }
            }
            tbody td,tbody th{
                font-family: 'Poppins', sans-serif !important;
                background: #fff;
                color: #575757;
                font-weight: 600;
                font-size: 14px;
            }
            th,td{
                padding:23px 16px;
                border-bottom: 0;
            }
        }
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
`;
export default EstimatesStyle;