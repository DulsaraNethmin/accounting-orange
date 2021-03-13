import Button from '../Component/Button';
import axios from 'axios';
import './route.css';


const Cashsl = () => {
//addentry
const addEntry=(e)=>
{
    e.preventDefault();
    let date=document.getElementById('date').value;
    let invoice=document.getElementById('invoice').value;
    let name=document.getElementById('name').value;
    //let quantity=document.getElementById('quantity').value;
    //let uprice=document.getElementById('unitprice').value;
    let discount=document.getElementById('discount').value;
    let value=document.getElementById('value').value;
    const data=
    {
        date:date,
        invoice:invoice,
        customer:name,
      //  quantity:Number(quantity),
        //uprice:Number(uprice),
        discount:Number(discount),
        value:Number(value)
    }

    console.log(data);
    axios.post('http://localhost:8000/user/info/cash.sl',data);

}


//search
const search=(e)=>
{
    e.preventDefault();
    let invoice=document.getElementById('search').value;
    axios.get(`http://localhost:8000/user/info/cash.sl?invoice=${invoice}`)
        .then(res=>
        {
            console.log(res.data);
            document.getElementById('qdate').value=res.data[0].date.slice(0,10);
            document.getElementById('qinvoice').value=res.data[0].invoice;
            document.getElementById('qname').value=res.data[0].customer;
            document.getElementById('qdiscount').value=res.data[0].discount;
            document.getElementById('qvalue').value=res.data[0].value;

        })



}



    return (  
        <div class='cashsl'>
           
            <div class='cashsl_entry'>
                <h1>Salas on cash</h1>
                <input type='date' id='date'/>
                <input type='text' placeholder='invoice no.' id='invoice'/>
                <input type='text'placeholder='name of the customer' id='name'/>
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
                        <input type='text' placeholder='invoice no' id='qinvoice'/>
                        <input type='text'placeholder='Name' id='qname'/>
                        <input type='text' placeholder='Discount' id='qdiscount'/>
                        <input type='text' placeholder='value' id='qvalue'/>
                        <Button text='update'/>
                        <Button text='Delete'/>
                    
                </div>
                <div class='query_table'>
                    <div>
                        <div>date</div>
                        <div>invoice no</div>
                        <div>name</div>
                        <div>discount</div>
                        <div>value</div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
 
export default Cashsl;