import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 250px;
    bordrer-redius: 8px;
    box-shadow : 0 0 6px 0 rgba(0,0,0,.15);
    overflow: hidden;
    font-family: 'Robotoblack';
    margin-bottom: 10px;

    img{
        width: 100%;
    }

    .content {
        padding: 10px 10px 0 10px;
        h4, p{
            magin: 0;
        }
    }
    .inline{
        
        border-bottom: 1px solid rgba(0,0,0,.8);
    }

    .gym {
        color: gray;

    }

    .province{
        color: gray;
    }

    .action-button{
        text-align: center;
        color: blue;
        cursor: pointer;
        padding : 6px;

        &:hover{
            background-color: rgba(0,0,0,.15)
        }
    }
    }
`

const CoachCard = props => {

    const { imageUrl, title, gym, province } = props.coach;

    return <StyledWrapper>
        <img src ={imageUrl}/>
        <div className= 'content'>
            <h4>{title}</h4>
            <div className='inline'>
                <p className='gym'>{gym}</p>
                <p className='province'>{province}</p>
            </div>
            </div>
            <div className='action-button'>See more</div>
        
    </StyledWrapper>
}

export default CoachCard;