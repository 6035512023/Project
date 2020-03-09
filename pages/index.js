import CoachCard from '../src/components/CoachCard';
import styled from 'styled-components';
import Topbar from '../src/components/Topbar';


const StyleWrapepr = styled.div`
    .grid-container{
        display : grid;
        padding: 20px;
        grid-template-columns : repeat(8, 1fr);
        grid-column-gap : 10 px;
    }
    
    `
const coach = [
    {
    imageUrl: 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/s960x960/41382458_2186840101604309_2915050889989324800_o.jpg?_nc_cat=100&_nc_ohc=gSC6PAa_DnQAX_eAyYU&_nc_ht=scontent.fbkk5-5.fna&_nc_tp=1&oh=0e00e07e231d76be44aa546e24d618d6&oe=5ED4DB8B',
    title: 'Pavaris Apornwarangkool',
    gym: 'Spider TKD Phuket',
    province: 'Phuket'
    },

    {
    imageUrl: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/14322233_1234907403226631_7372425127899683950_n.jpg?_nc_cat=111&_nc_ohc=Z9gwhh9jX0sAX-Dcex0&_nc_ht=scontent.fbkk5-3.fna&oh=2642d7eb5f4d6bd0354ebe57489729d9&oe=5EA1FF33',
    title: 'Rattharoja Apornwarangkool',
    gym: 'Pavaris GYM',
    province: 'Nakronsrithammarat'
    },
]

const HomePage = () => {
    return ( <StyleWrapepr>
                <Topbar/>
                <div className='grid-container'>
                {
                coach.map((item, index) => (
                    <CoachCard key={index} coach={item}/>
                ))
            }
                </div>
            
            </StyleWrapepr>
    )
}

export default HomePage;