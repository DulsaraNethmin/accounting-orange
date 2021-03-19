import './route.css';
import {Link,useHistory} from 'react-router-dom';

const Dashboard=()=>
{
    const history=useHistory();

    return(
        <div className='dashCon'>
            <div className='topic'>Start AccounTina</div>
            <div className='dash'>
                <div className='navTopic'>
                    <div className='sec' onClick={()=>history.push('/cash.sale')}>Sales</div>
                    <div className='sec' onClick={()=>history.push('/sales.return')}>Sales return</div>
                    <div className='sec' onClick={()=>history.push('/credit.sale')}>Credit Sales</div>
                    <div className='sec' onClick={()=>history.push('/cash.purchase')}>Purchase</div>
                    <div className='sec' onClick={()=>history.push('/purchase.return')}>Purchase Return</div>
                    <div className='sec' onClick={()=>history.push('/credit.purchase')}>Credit Purchase</div>
                </div>
                <div className='repo'>
                    <div onClick={()=>history.push('/analysis')}>Analysis</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

