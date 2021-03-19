import './navbar.css';
import {Link,useHistory} from 'react-router-dom';
import {useState} from 'react';

const Navbar = () => {
    const history=useHistory();
    const [sales,setSales]=useState('');
    const [purchase,setPurchase]=useState('');

    const saleslink=(e)=>
    {
        switch(e.target.value)
        {
            case 'Sales on cash':
                setSales('/cash.sale');
                break;
            case 'on credit':
                setSales('/credit.sale');
                break;
            case 'Sales return':
                setSales('/sales.return');
                break;
        }
    }

    const purchaselink=(e)=>
    {
        switch(e.target.value)
        {
            case 'cash Purchase':
                setPurchase('/cash.purchase');
                break;
            case 'on credit':
                setPurchase('/credit.purchase');
                break;
            case 'Purchase return':
                setPurchase('/purchase.return');
                break;
        }
    }

    return (
        <div className='nav-div'>
        <h1 className='main-title' onClick={()=>history.push('/dash.board')}>AccounTina</h1>  
        <nav>
                <span onClick={()=>history.push('/dash.board')}>DashBoard</span>
                <span onClick={()=>history.push('/analysis')}>Analysis</span>
                 <span class='spanlink' onClick={()=>{sessionStorage.setItem("loginState",false);history.push('/login')}}>Logout</span>
        </nav>
        </div>
    );
}
 
export default Navbar;
