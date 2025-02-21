import styled from "styled-components";

const SidebarStyle = styled.div`
    width: 300px;
    box-shadow: 0px 1px 10px #ddd;
    transition:0.5s;
    position: relative;
    @media(max-width:991px){
        width: 0;
        position: relative;
        left: -100%;
    }
    .sidebar-main{
        width: 300px;
        height: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .logo-sect{
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding: 25px 20px 37px 20px;
            cursor: pointer;
            .MuiBox-root{
                display: flex;
                align-items: center;
            }
            p{
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                margin-left: 10px;
            }
            .menu-icon{
                display:none;
                cursor: pointer;
                fill: #a7a7a7;
                @media(max-width:991px){
                    display:block;
                }
            }
        }
        .menu-link{
            a{
                text-decoration: none;
            }
            .MuiList-root{
                padding: 0 5px 0 10px;
                .MuiListItemIcon-root{
                    min-width: 40px;
                    
                }
                .MuiListItem-root{
                    .MuiListItemButton-root{
                        background: #fff;
                        border-radius: 50px;
                        margin-bottom: 10px;
                        &:hover{
                            background: #FF4B4B;
                            .MuiListItemText-root .MuiTypography-root{
                                color: #fff;
                            }
                            svg{
                                rect,path,circle{
                                    fill: #fff;
                                }
                            }
                        }
                        .MuiListItemText-root .MuiTypography-root{
                            color: #575757;
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 27px;
                        }
                    }
                }
            }
            .active-menu .MuiListItemButton-root{
                background: #FF4B4B !important;
                .MuiListItemText-root .MuiTypography-root{
                    color: #fff !important;
                }
                svg{
                    rect,path,circle{
                        fill: #fff;
                    }
                }
            }
        }
        .profile-sect{
            display: flex;
            align-items: center;
            margin: 12px 5px 24px 33px;
            cursor:pointer;
            .profile-icon{
                background: #FFF3D0;
                border-radius: 15px;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
            }
            p{
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
                margin-left: 16px;
            }
        }
    }
`;
export default SidebarStyle;