import Button from "./Button";
import './formlogin.css';
import {Link , useHistory } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react';
const FormLogin =(props) => 
{

    const history =useHistory();
    const login=(e)=>
    {
        
        
        e.preventDefault();
        let data=
        {
            email:document.getElementById('email').value,
            password:document.getElementById('password').value
        }
        console.log(data);
            axios.post('http://localhost:8000/user/info/login',data)
                .then((res)=>
                {
                    //history.push('/home');
                   console.log(res.data);
                    if(res.data=='ok')
                    {
                        history.push('/dash.board');
                        sessionStorage.setItem('loginState',true);
                    }
                    else if(res.data=='wrong pw')
                    {
                        history.push('/login');
                        sessionStorage.setItem('loginState',false);
                    }
                })
                .catch()
                {
                    history.push('/');
                }     
    }

useEffect(()=>
{
    try
    {
        
        if(sessionStorage.getItem('loginState')==='true')
        history.push('/dash.board');
        console.log(Boolean(sessionStorage.getItem('loginState')));
    }
    catch
    {
        console.log('fff');
        history.push('/dash.board');
    }
})

    return (  
    <div className='main'>
        <div>AccounTina-Login</div>
        <form>
            <h2>Login</h2>
            <input type='text' name='loginAddress'  autoComplete='off' placeholder='email'  id='email' pattern='/[a-zA-Z]{5}/'/>
            <input type='password' placeholder='Password' name='loginPassword' id='password'/>
            <div>            
            <Button text='Login' onClick={e=>login(e)} className='classbtn'/>
            <span><Link to='/register'>Register</Link></span>
           </div> 
        </form>
    </div>  
   );
}
export default FormLogin