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

    .menu-item{
        cursor: pointer;
    }

    .menu-item.selected{
        color: var(--orange);
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
                    <div className = 'menu'>
                        <Link href='/profile'>
                            <div className={'menu-item selected'}>Profile</div>
                        </Link>
                    </div>
                </StyledWrapper>
        )

}

export default Topbar;