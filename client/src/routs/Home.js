import './route.css';
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history =useHistory();

    return (  
        <div >
            <div className='home_main'>
                <div className='main_title'>
                    <div onClick={()=>history.push('/login')}>
                    AccounTina
                    </div>
                    </div>
                <div className='main_go'>
                    
                    <div>
                        
                    </div>
                    
                    </div>
            </div>
        </div>
    
    );
}
 
export default Home;