import Button from "./Button";
import './formlogin.css';
import {Link , useHistory } from 'react-router-dom';
import axios from 'axios';
const FormLogin =(props) => {

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
                            history.push('/home');
                    else if(res.data=='wrong pw')
                            history.push('/');
                })
                .catch()
                {
                    history.push('/');
                }     
    }


    return (  
        <div>
        <form>
            <h2>Login</h2>
            <input type='text' name='loginAddress'  autoComplete='off' placeholder='email'  id='email'/>
            <input type='password' placeholder='Password' name='loginPassword' id='password'/>
            <div>            
            <Button text='Login' onClick={e=>login(e)}/>
            <span><Link to='/register'>Register</Link></span>
           </div> 
        </form>
        </div>  
   );
}
export default FormLogin