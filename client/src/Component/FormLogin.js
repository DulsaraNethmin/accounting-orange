import Button from "./Button";
import './formlogin.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const FormLogin =() => {

    const [logindata,setLogindata]=useState('');

    let handleLogin=(e)=>
    {
        setLogindata(e.target.value);
        console.log(e.target);
    }  



    return (  
        <div>
        <form>
            <h2>Login</h2>
            <input type='text' name='login-address'  autoComplete='off' placeholder='email or username' onChange={(e)=>handleLogin(e)} />
            <input type='password' placeholder='Password' name='login-password' onChange={(e)=>setLogindata(e.target.value)}/>
            <div>            
            <Button text='Login' onClick={handleLogin}/>
            <span><Link to='/register'>Register</Link></span>
           </div>
           {loindata}
        </form>
        </div>

     
   );
}
 

export default FormLogin