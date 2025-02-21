import styled from "styled-components";

const DashboardStyle = styled.div`
  .dashboard-main{
    display: flex;
    height: 100vh;
    .dashboard-wrap{
        width: calc(100% - 300px);
        padding: 46px 0 0 50px;
        @media(max-width:991px){
            width:100%;
            padding: 46px 30px 0 30px;
        }
        @media(max-width:767px){
            padding: 30px 20px 0 20px;
        }
        .dashboard-title{
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
            display: flex;
            align-items: center;
            @media(max-width:767px){
                font-size: 18px;
            }
            svg.show-sidemenu{
                display:none;
                margin-right: 10px;
                cursor: pointer;
                @media(max-width:991px){
                    display:block;
                }
            }
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
export default DashboardStyle;