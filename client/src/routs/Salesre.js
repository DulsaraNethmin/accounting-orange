import Button from '../Component/Button';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './route.css';
import Navbar from '../Component/Navbar';




const Salesre = () => {

const [values,setValues]=useState([]);





const history=useHistory();
//addentry
const addEntry=(e)=>
{

    e.preventDefault();
    let Date=document.getElementById('date').value;
    let creditnote=document.getElementById('creditnote').value;
    let name=document.getElementById('name').value;
    let item=document.getElementById('item').value;
    let quantity=document.getElementById('quantity').value;
    let uprice=document.getElementById('unitprice').value;
    let discount=document.getElementById('discount').value;
    let value=document.getElementById('value').value;
    const data=
    {
        Date:Date,
        creditnote:creditnote,
        customer:name,
        item:item,
        quantity:Number(quantity),
        uprice:Number(uprice),
        discount:Number(discount),
        value:Number(value)
    }

    console.log(data);
    axios.post('http://localhost:8000/user/info/sales.re',data)
        .then(res=>
        {
            console.log(res.data);
            let arr=Object.values(res.data).map(e=><div>{e}</div>);
            console.log(arr);
            let arr2=values.concat(arr);
            setValues(arr2);
        })


}


//search
let id='';
const search=(e)=>
{
    e.preventDefault();
    let invoice=document.getElementById('search').value;
    axios.get(`http://localhost:8000/user/info/sales.re?creditnote=${invoice}`)
        .then(res=>
        {
            id=res.data._id;
            console.log(id);
            document.getElementById('qdate').value=res.data.Date;
            document.getElementById('qinvoice').value=res.data.creditnote;
            document.getElementById('qname').value=res.data.customer;
            document.getElementById('qitem').value=res.data.item;
            document.getElementById('qdiscount').value=res.data.discount;
            document.getElementById('qquantity').value=res.data.quantity;
            document.getElementById('quprice').value=res.data.uprice;
            document.getElementById('qvalue').value=res.data.value;

        })
        .catch()
        {
            history.push('/sales.return');
            //alert('error');
        }
    }


//update
const updateq=(e)=>
{
    const data=
    {
       Date:document.getElementById('qdate').value,
       creditnote:document.getElementById('qinvoice').value,
       customer:document.getElementById('qname').value,
       item:document.getElementById('qitem').value,
       quantity:Number(document.getElementById('qdiscount').value),
       uprice:Number(document.getElementById('qquantity').value),
       discount:Number(document.getElementById('quprice').value),
       value:Number(document.getElementById('qvalue').value)
    }
    console.log(id + "and "+ data);

    axios.put(`http://localhost:8000/user/info/sales.re/${id}`,data);
}


const  deleteq=(e)=>
{
    console.log(id); 
    axios.delete(`http://localhost:8000/user/info/sales.re/${id}`);
}

//  useEffect(()=>
//  {
//           axios.get('http://localhost:8000/user/info/sales.re/all')
//         .then(res=>
//             {
//               let arr=[];
//                 res.data.map(e=>
//                 {
//                      arr=arr.concat(Object.values(e).slice(1,8))
//                  });
//              let arr2  = arr.map(e=>
//                  {
//                      return <div>{e}</div>
//                  });
//                  setValues(arr2);
               

//              });
//  },[updateq])


const getValue=()=>
{
    let v=document.getElementById('value').value*1;
    let up=document.getElementById('unitprice').value*1;
    let dis=document.getElementById('discount').value*1;
    let qnt=document.getElementById('quantity').value*1; 
    document.getElementById('value').value=
        eval(up*qnt-up*qnt*dis/100);
}
    return (  


        //usestate
        

<div>
        <Navbar/>
        <div class='cashsl'>
           
            <div class='cashsl_entry'>
                <h1>Salas Return</h1>
                <input type='date' id='date' />
                <input type='text' placeholder='Credit note' id='creditnote'/>
                <input type='text'placeholder='Customer name' id='name'/>
                <input type='text'placeholder='Item' id='item'/>
                <input type='text' placeholder='Quantity' id='quantity'/>
                <input type='text' placeholder='Unit price' id='unitprice'/>
                <input type='text' placeholder='Discount %' id='discount' onBlur={()=>getValue()}/>
                <input type='text' placeholder='value' id='value'/>
                <Button text='Add entry' id='addentry' onClick={(e)=>addEntry(e)}/>
                
            </div>
            <div class='query_cashsl'>
                <div class='query_search'>
                    <h2>Query Box</h2>
                    <div>
                        <input type='text' id='query_search' placeholder='Credit note' id='search'/>
                        <Button text='Search' onClick={e=>search(e)}/> 
                    </div>
                </div>
                <div class='query_update'>
                
                        <input type='date' id='qdate'/>
                        <input type='text' placeholder='Credit note' id='qinvoice'/>
                        <input type='text'placeholder='Name' id='qname'/>
                        <input type='text'placeholder='Item' id='qitem'/>
                        <input type='text' placeholder='Quantity' id='qquantity'/>
                        <input type='text' placeholder='Unit Price' id='quprice'/>
                        <input type='text' placeholder='Discount' id='qdiscount'/>
                        <input type='text' placeholder='value' id='qvalue'/>
                        <Button text='update' onClick={e=>updateq(e)}/>
                        <Button text='Delete' onClick={e=>deleteq(e)}/>
                    
                </div>
                <div class='query_table_creditsl'>
                    <Button text="fetch" className='tableFetch'/>
                    <div>
                        <div className='div_table'>date</div>
                        <div className='div_table'>credit note</div>
                        <div className='div_table' >name</div>
                        <div className='div_table' >Item</div>
                        <div className='div_table'>Quantity</div>
                        <div className='div_table'>Unit Price</div>
                        <div className='div_table'>discount</div>
                        <div className='div_table'>value</div>
                        {values}
                    </div>
                </div>
            </div>
        </div> 
    </div>       
    );
}
 
export default Salesre;