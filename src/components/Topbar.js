import styled from 'styled-components';
import Link from 'next/link';

const StyledWrapper = styled.div`
    
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    box-shadow: 0  4px 6px 0  rgba(0,0,0,.15);
    padding: 0 24px;

    .logo{
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            width: 32 px;
            height: 32px;
            margin-right: 5px;
            border-radius: 50%;
        }
    }
    .menu-container{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
        width:13%;
        color:black;
        font-weight:bold;
    }

    .menu-item{
        cursor: pointer;
    }

    .menu-item:hover {
        color: orange;
    }
`
const Topbar = () => {
        return (
                <StyledWrapper>
                    <Link href='/'>
                        <div className= 'logo'>
                                <img src='/static/images/iconTKD.jpg'/>
                                <h4>Taekwondo</h4>
                        </div>
                    </Link>
                    <div className="menu-container">
                        <div>
                            <Link href='/home'>
                                <div className="menu-item">HOME</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/login'>
                                <div className="menu-item">LOGIN</div>
                            </Link>
                        </div>
                        <div>
                            <Link href='/signup'>
                                <div className="menu-item">SIGN UP</div>
                            </Link>
                        </div>
                    </div>
                </StyledWrapper>
        )

}

export default Topbar;