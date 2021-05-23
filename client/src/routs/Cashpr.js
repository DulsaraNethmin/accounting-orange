import Button from '../Component/Button';
import axios from 'axios';
import {useState} from 'react';
import Navbar from '../Component/Navbar';


const Cashpr = () => 
{
    const [values,setValues]=useState([]);  
 //addentry
 const addEntry=(e)=>
 {
     e.preventDefault();
     let date=document.getElementById('date').value;
     let invoice=document.getElementById('invoice').value;
     let name=document.getElementById('name').value;
     let item=document.getElementById('item').value;
     //let quantity=document.getElementById('quantity').value;
     //let uprice=document.getElementById('unitprice').value;
     let discount=document.getElementById('discount').value;
     let value=document.getElementById('value').value;
     const data=
     {
         date:date,
         invoice:invoice,
         customer:name,
         item:item,
       //  quantity:Number(quantity),
         //uprice:Number(uprice),
         discount:Number(discount),
         value:Number(value)
     }
 
     console.log(data);
     axios.post('https://accountina.herokuapp.com/user/info/cash.pr',data)
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
    axios.get(`https://accountina.herokuapp.com/user/info/cash.pr?invoice=${invoice}`)
        .then(res=>
        {
            id=res.data[0]._id;
            console.log(id);
            console.log(res.data);
            document.getElementById('qdate').value=res.data[0].date.slice(0,10);
            document.getElementById('qinvoice').value=res.data[0].invoice;
            document.getElementById('qname').value=res.data[0].customer;
            document.getElementById('qitem').value=res.data[0].item;
            document.getElementById('qdiscount').value=res.data[0].discount;
            document.getElementById('qvalue').value=res.data[0].value;

        })



}

//update
const updateq=(e)=>
{
    const data=
    {
       date:document.getElementById('qdate').value,
       invoice:document.getElementById('qinvoice').value,
       customer:document.getElementById('qname').value,
       item:document.getElementById('qitem').value,
      // quantity:Number(document.getElementById('qdiscount').value),
       //uprice:Number(document.getElementById('qquantity').value),
       discount:Number(document.getElementById('qdiscount').value),
       value:Number(document.getElementById('qvalue').value)
    }
    console.log(id + "and "+ data);
    //console.log(data);
   axios.put(`https://accountina.herokuapp.com/user/info/cash.pr/${id}`,data);
}


const  deleteq=(e)=>
{
    console.log(id); 
    axios.delete(`https://accountina.herokuapp.com/user/info/cash.pr/${id}`);
}



    return ( 
        <div>
            <Navbar/>
        <div class='cashsl'>
           
            <div class='cashsl_entry'>
                <h1>Purchase on cash</h1>
                <input type='date' id='date'/>
                <input type='text' placeholder='voucher no.' id='invoice'/>
                <input type='text'placeholder='Supplier name' id='name'/>
                <input type='text'placeholder='Item' id='item'/>
                <input type='text' placeholder='Discount' id='discount'/>
                <input type='text' placeholder='value' id='value'/>
                <Button text='Add entry' onClick={e=>addEntry(e)}/>
            </div>
            <div class='query_cashsl'>
                <div class='query_search'>
                    <h2>Query Box</h2>
                    <div>
                    <input type='text' id='query_search' placeholder='invoice no.' id='search'/>
                    <Button text='Search' onClick={e=>search(e)}/>  
                    </div>
                </div>
                <div class='query_update'>
                
                <input type='date' id='qdate'/>
                        <input type='text' placeholder='voucher no' id='qinvoice'/>
                        <input type='text'placeholder='Name' id='qname'/>
                        <input type='text'placeholder='Item' id='qitem'/>
                        <input type='text' placeholder='Discount' id='qdiscount'/>
                        <input type='text' placeholder='value' id='qvalue'/>
                        <Button text='update' onClick={e=>updateq(e)}/>
                        <Button text='Delete' onClick={e=>deleteq(e)}/>
                    
                </div>
                <div class='query_table'>
                <Button text="fetch" className='tableFetch'/>
                    <div>
                        <div className='div_table'>date</div>
                        <div className='div_table'>credit note</div>
                        <div className='div_table' >name</div>
                        <div className='div_table' >item</div>
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
 
export default Cashpr;