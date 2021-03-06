import Button from "./Button";
import './formlogin.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const FormLogin =() => {
    
    //set an obeject to store user input data  
    const [logindata,setLogindata]=useState({
        loginAddress:'',
        loginPassword:''
    })

    const handleLogin =(e)=>
    {
        // e.target is an object.
        // name and value are attributes of that object
       const {name,value}=e.target;
       console.log(name+':'+value);
       setLogindata(prevLogindata=>
        {
            //console.log(...prevLogindata)
            return {...prevLogindata,[name]:value};
        })
    }

    const handleClick =(e)=>
    {
        e.preventDefault();
        console.log(logindata);
    }


    return (  
        <div>
        <form>
            <h2>Login</h2>
            <input type='text' name='loginAddress'  autoComplete='off' placeholder='email or username' onChange={(e)=>handleLogin(e)} />
            <input type='password' placeholder='Password' name='loginPassword'onChange={(e)=>handleLogin(e)} />
            <div>            
            <Button text='Login' onClick={handleClick}/>
            <span><Link to='/register'>Register</Link></span>
           </div>
           
        </form>
        
        </div>  
   );
}
export default FormLogin