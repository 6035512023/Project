import styled from 'styled-components';
import Link from 'next/link';
import Topbar from "../Topbar"

const StyledWrapper = styled.div`


    .Container{

        display:flex;
        width:100%;
        flex-direction:column;
        align-items:center;
        justify-content: flex-start;
        font-family:'Baloo2-ExtraBold';
    }
   

    .name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        padding: 12px 24px!important;
        border: 1px solid #212F3D!important;
        letter-spacing: 4px;
        color: #212F3D!important;
        text-align: center!important;
        background-color: white;
    }

    .read {
        font-size: 48px!important;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        margin: 10px 0;
    }

    .centerimg{
        width:100%;
        height:600px;
    }
`
const HomePage = () => {
    return (
        <div>
            <Topbar/>
        <StyledWrapper>
            
            <div className="back">
                

                <div className="Container">
                    <div className="name">
                        <h1 className="read">Taekwondo</h1>
                        <h1 className="phuket">trainig management </h1>
                    </div>
                </div>
            </div>


        </StyledWrapper>
        </div>
        

    )
}

export default HomePage;