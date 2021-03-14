import Button from "./Button"
import './formreg.css'
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
const FormReg =({onClick}) => {

    const history=useHistory();

//pass data to the server
    const getData=(e)=>
    {
        e.preventDefault();
        
        const data= 
        {
            Name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            password:document.getElementById('password').value,
            phonno:document.getElementById('phonno').value
        }
        console.log(data);
            axios.post('http://localhost:8000/user/info/save',data)
                .then((res)=>
                {
                        console.log(res);
                        if(res.data==='userCreated')
                            history.push('/');
                       else if(res.data==='userNotCreated')
                            history.push('/register');
                 })
                 .catch()
                 {
                        //console.log()
                        history.push('/register');
                 }

    }


//confirm password
const confirmPassword=()=>
{
    if(!(document.getElementById('password').value===document.getElementById('confirmPassword').value))
    {
        document.getElementById('pwmsg').innerHTML='password does not match';
    }
    else
    {
        document.getElementById('pwmsg').innerHTML='';
        
    }
}


//final check

const finalCheck=()=>
{
    let arr=[document.getElementById('name').value.lenght,document.getElementById('email').value.length,document.getElementById('phonno').value.length,document.getElementById('passowrd').value.length];
    if(!arr.some(e=>e==NaN))
    {
        return true;
    }
    else
     return false;

}

    return (  
        <div>
        <form className='reg'>
            <h2>Register</h2>
            <input type='text' placeholder='Name' id='name' required maxLength='30' minLength='5'/>
            <input type='text' placeholder='Email' id='email' required maxLength='40'/>
            <input type='text' placeholder='Mobile number' id='phonno' required maxLength='10'/>
            <input type='password' placeholder='Password' id='password' required maxLength='20' onBlur={()=>console.log(1)}/>
            <input type='password' placeholder='Confirm password' id='confirmPassword' required maxLength='20' onBlur={confirmPassword} />
            <span id='pwmsg' ></span>
            <div>            
            <Button text='Reister' onClick={e=>getData(e)} disabled={false}/>
            <span onClick={onClick}><Link to='/'>Login</Link></span>
            </div>
        </form>
        </div>  
   );
}


 

export default FormReg