import Button from "../Component/Button"
import Navbar from "../Component/Navbar"
import axios from 'axios';
import {useState} from 'react';

const Analysis=()=>
{

const [cashsl,setCashsl]=useState([]);
const [creditsl,setCreditsl]=useState([]);
const [cashpr,setCashpr]=useState([]);
const [creditpr,setCreditpr]=useState([]);
const [salesre,setSalesre]=useState([]);
const [purchasere,setPurchasere]=useState([]);

const [cashslVal,setCashslVal]=useState([]);
const [creditslVal,setCreditslVal]=useState([]);
const [cashprVal,setCashprVal]=useState([]);
const [creditprVal,setCreditprVal]=useState([]);
const [salesreVal,setSalesreVal]=useState([]);
const [purchasereVal,setPurchasereVal]=useState([]);

//getInfo
    const getInfo=()=>
    {
        let fdate=document.getElementById('from_date').value;
        let tdate=document.getElementById('to_date').value;
        //console.log(`from :${fdate} to :${tdate} gap is :${Date(tdate)}`);
        let data=
        {
            fdate:fdate,
            tdate:tdate
        };
        console.log(data);
        axios.get(`https://accountina.herokuapp.com/get.user.info?fdate=${fdate}&tdate=${tdate}`)
            .then(res=>
                {
                    console.log('success');
                    console.log(res.data);
                    let xcashsl=0,xcreditsl=0,xcashpr=0,xcreditpr=0,xsalesre=0,xpurchasere=0;
                //cash sales
                    let cashsl_fetched=res.data.cashsl.map(e=>
                        {
                            xcashsl +=Number(e.value);
                            return <tr><td>{String(e.date).slice(0,10)}</td><td>{e.invoice}</td><td>{e.value}</td></tr>
                        });
                //credit sales
                let creditsl_fetched=res.data.salescr.map(e=>
                    {
                        xcreditsl +=Number(e.value);
                        return <tr><td>{String(e.date).slice(0,10)}</td><td>{e.invoice}</td><td>{e.value}</td></tr>
                    });
                //cash sales
                let cashpr_fetched=res.data.cashpr.map(e=>
                    {
                        xcashpr +=Number(e.value);
                        return <tr><td>{String(e.date).slice(0,10)}</td><td>{e.invoice}</td><td>{e.value}</td></tr>
                    });
                //cash sales
                let creditpr_fetched=res.data.purchasecr.map(e=>
                    {
                        xcreditpr +=Number(e.value);
                        return <tr><td>{String(e.date).slice(0,10)}</td><td>{e.invoice}</td><td>{e.value}</td></tr>
                    });
                //cash sales
                let purchasere_fetched=res.data.purchasere.map(e=>
                    {
                        xpurchasere +=Number(e.value);
                        return <tr><td>{String(e.date).slice(0,10)}</td><td>{e.invoice}</td><td>{e.value}</td></tr>
                    });
                //cash sales
                let salesre_fetched=res.data.salesre.map(e=>
                    {
                        xsalesre +=Number(e.value);
                        return <tr><td>{String(e.date).slice(0,10)}</td><td>{e.invoice}</td><td>{e.value}</td></tr>
                    });
                    setCashsl(cashsl_fetched);
                    setCreditsl(creditsl_fetched);
                    setCashpr(cashpr_fetched); 
                    setCreditpr(creditpr_fetched);
                    setPurchasere(purchasere_fetched);
                    setSalesre(salesre_fetched);

                    setCashslVal(xcashsl);
                    setCreditslVal(xcreditsl);
                    setCashprVal(xcashpr);
                    setCreditprVal(xcreditpr);
                    setPurchasereVal(xpurchasere);
                    setSalesreVal(xsalesre);
                })

    }



    return(
        <div>
            <Navbar/>
            <div className='report_header'>
                <div className='report_header_title'>Report</div>
                <div className='report_header_date'>
                    <div>
                        <span>From</span>
                        <input type='date' id='from_date'/>
                    </div>
                    <div>
                        <span>To</span>
                        
                        <input type='date' id='to_date'/>
                        
                    </div>
                    <Button text='Get'  onClick={()=>getInfo()}/>
                </div>
            </div>


            <div className='report'>
                 <div>
                    <div className='report_table_header'>Cash Sales</div>
                    <table className='report_table'>
                        <th>Date</th>   <th>Invoice no</th>     <th>Value</th>
                        {cashsl}
                        <tr className='total'><td colSpan='2'>total</td>  <td>{cashslVal}</td></tr>  
                    </table>
                </div> 


                <div>
                    <div className='report_table_header'>Credit Sales</div>
                    <table className='report_table'>
                        <th>Date</th>   <th>Invoice no</th>     <th>Value</th>
                        {creditsl}
                        <tr className='total'><td colSpan='2'>total</td>  <td>{creditslVal}</td></tr>  
                    </table>
                </div> 



                <div>
                    <div className='report_table_header'>Cash Purchase</div>
                    <table className='report_table'>
                        <th>Date</th>   <th>Invoice no</th>     <th>Value</th>
                        {cashpr}
                        <tr className='total'><td colSpan='2'>total</td>  <td>{cashprVal}</td></tr>  
                    </table>
                </div> 



                <div>
                    <div className='report_table_header'>Credit Purchase</div>
                    <table className='report_table'>
                        <th>Date</th>   <th>Invoice no</th>     <th>Value</th>
                        {creditpr}
                        <tr className='total'><td colSpan='2'>total</td>  <td>{creditprVal}</td></tr>  
                    </table>
                </div> 




                <div>
                    <div className='report_table_header'>Sales return</div>
                    <table className='report_table'>
                        <th>Date</th>   <th>Invoice no</th>     <th>Value</th>
                        {salesre}
                        <tr className='total'><td colSpan='2'>total</td>  <td>{salesreVal}</td></tr>  
                    </table>
                </div> 




                <div>
                    <div className='report_table_header'>Purchase return</div>
                    <table className='report_table'>
                        <th>Date</th>   <th>Invoice no</th>     <th>Value</th>
                        {purchasere}
                        <tr className='total'><td colSpan='2'>total</td>  <td>{purchasereVal}</td></tr>  
                    </table>
                </div> 


            </div>
        </div>
    )
}


export default Analysis;