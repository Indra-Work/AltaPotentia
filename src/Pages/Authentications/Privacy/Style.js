import styled from "styled-components";

const Privacystyle = styled.div`
.policy_main{
    width: 900px;
    margin: auto;
    @media (max-width:991px){
        width: calc(100% - 40px);
        margin: 0 20px;
    }
    .privacy{
        display: flex;
        align-items: center;
        margin-top: 40px;
        .arrow{
            width: 26px;
            height: 20px;
            margin-right: 27px;
            margin-top: 5px;
        }
        .content{
            h3{
                font-size: 24px;
                font-weight: 600;
                color: #575757;
                margin: 0;
                @media (max-width:767px){
                    font-size: 28px;
                }
                @media (max-width:575px){
                    font-size: 25px;
                }
                @media (max-width:424px){
                    font-size: 20px;
                }
            }
        }
    }
    .privacy_content{
        background: #fff;
        box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 70px 70px 10px;
        margin: 40px 0;
        @media (max-width:991px){
            padding: 40px 40px 10px;
        }
        @media (max-width:575px){
            padding: 20px 20px 10px;
            margin-top: 20px;
        }
        .content_sub{
            width: 760px;
            margin: auto;
            @media (max-width:991px){
                width: 100%;
            }
            .MuiTypography-root{
                margin-bottom: 30px;
                font-size: 16px;
                font-weight: 500;
                color: #575757;
            }
        }
    }
}`
export default Privacystyle;
