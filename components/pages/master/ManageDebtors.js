


import React, { useEffect, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Pagination from './paginaton';
import "react-datepicker/dist/react-datepicker.css";
import Loaders from "../../modals/loader";
import { Input} from 'reactstrap';
import {useTranslation} from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {updatSelectedLanguge,getDebitors,SelectedPaymentPopup,filteredDebitorsList} from "../../../Actions/appActions"
import PaymentPlans from "../../modals/PaymentPlans";
import { FaInfoCircle } from "react-icons/fa";


 
const ManageDebtors =()=> {
 
   const {t,i18} = useTranslation();
   const [postsPerPage,setpostsPerPage]=useState(5);
   const [presentPage,setpresentPage]=useState(1);

  const dispatch = useDispatch();
  const dataFromStore = useSelector(state => state);
  const selectedLanguage=dataFromStore.appreducers.selectedLanguage
  const indexOfLastPost = presentPage * postsPerPage;
  const indexOfFirstPost =indexOfLastPost -postsPerPage;
  const currentPosts = dataFromStore.appreducers.debitorsListFiltered.slice(indexOfFirstPost,indexOfLastPost)

  const paginate = ( pageNumber )=>{
     setpresentPage(pageNumber)
  };

 
  useEffect(()=>{
    document.querySelector(".page-sidebar").classList.add('open');
    document.querySelector(".page-main-header").classList.add('open');
     dispatch(getDebitors())
  },[])


 const filterList=(e)=>{
    var updateList = dataFromStore.appreducers.debitorsList;
    let inputVal= e.target.value.toLowerCase()
    updateList = updateList.filter(item => {
      return ( item.ssn.toLowerCase().includes(inputVal) ||
      item.firstName.toLowerCase().includes(inputVal) || 
      item.lastName.toLowerCase().includes(inputVal) || 
      item.status.toLowerCase().includes(inputVal) ||
      item.phone.toLowerCase().includes(inputVal) ||
      item.loanType.toString().toLowerCase().includes(inputVal) ||
      item.approvedAmount.toString().includes(inputVal) || 
      item.paybackPeriod.toString().toLowerCase().includes(inputVal) || 
      item.interestRate.toString().toLowerCase().includes(inputVal) || 
      item.invoiceFee.toString().toLowerCase().includes(inputVal))
    } );
    dispatch(filteredDebitorsList(updateList))
 }
   
    return (
        <div className="row" >
          <div className="col-md-12 text-right">
            <p style={{ color: "#0F6999",marginTop:'10px'}}> 
              <b>{selectedLanguage == "Swedish"?'Nuvarande användaren: CREDITOR':"Current User: CREDITOR"}</b> 
            </p>
            <div style={{color:'#333333'}} className="f-14">{selectedLanguage == "Swedish"?"Roll: Borgenär": "Role: CREDITOR"} </div>
          </div> 
          <div style={{background:'white',border: '19px solid #f6f7fb',width:'100%'}} >
            <div className="col-md-12" style={{marginLeft:10,marginTop:20,marginBottom:30}}>
              <h5>
                  {selectedLanguage == "Swedish" ?'Hantera gäldenärer':"Manage Debtors"}
              </h5>
            </div>
            <div className="row">
              <div className="col-md-6" >
                <Input style={{width:'30%',marginLeft:60}} type="text" placeholder={selectedLanguage == "Swedish" ?'Global sökning':"Global Search"} onChange={(e)=> filterList(e)} />
              </div>
              <div className="col-md-6">
                <select style={{width:'30%',marginLeft:360}}  className="form-control" defaultValue={selectedLanguage} onChange={(e) => dispatch(updatSelectedLanguge(e.target.value))}>
                  <option value="" disabled>Select Language</option>
                  <option>English</option>
                  <option>Swedish</option>
                </select>
              </div>
            </div>
            <div style={{margin:'10px 60px',minHeight:300}}>
                <table className="table table-responsive-sm table-hover table-outline mb-1" style={{width:'100%'}}>
                  <thead style={{ backgroundImage: 'linear-gradient(160deg, rgb(103, 183, 225) 25%, rgb(15, 105, 153))'}}>
                      {selectedLanguage=="Swedish"?
                    <tr>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>SSN</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Namn</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>telefon</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>lånetyp</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Godkänt belopp</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Återbetalnings period</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Ränta</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Fakturavgift</th>
                      <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Betalningsplaner</th>

                      <th style={{color:'white',textAlign:'center'}}>Status</th>
                    </tr>:
                      <tr>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>SSN</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Name</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Phone</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Loan Type</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Approved Amount</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Payback Period</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Interest Rate</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>InvoiceFee</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Payment Plans</th>
                        <th style={{color:'white',textAlign:'center',verticalAlign:'middle'}}>Status</th>
                                                    
                      </tr>
  }
                    </thead>
                    <tbody>
                      {
                        currentPosts.length>0?
                      currentPosts.map((res, id) => {
                        return (
                          <tr key={id}>
                            <td>{res.ssn}</td>
                            <td>{res.firstName.toUpperCase() + " " + res.lastName.toUpperCase()}</td>
                            <td>{res.phone}</td>
                            <td>{res.loanType.toUpperCase()}</td>
                            <td>{res.approvedAmount}</td>
                            <td>{res.paybackPeriod}</td>
                            <td>{res.interestRate}</td>
                            <td>{res.invoiceFee}</td>
                            <td> 
                              <button type="button" className="btn btn-outline btn-sm mb-1" style={{backgroundImage: 'linear-gradient(160deg, rgb(103, 183, 225) 25%, rgb(15, 105, 153))',border:'none',color:"white"}} onClick={() => dispatch(SelectedPaymentPopup(res.ssn))}>
                                {selectedLanguage == "Swedish" ?'Se':"View"} <span><FaInfoCircle/></span>
                                <PaymentPlans showId={res.ssn} paymentDetails={res}/>
                              </button>
                            </td>
                            <td>{res.status.toUpperCase()}</td>
                          </tr>
                        );
                      })
                      :
                      <tr>
                            <td className='text-center' colSpan={10}>NO DATA FOUND</td>
                                                    
                      </tr>
                      }
                    </tbody>
                  </table>
              </div>
          </div>
          <div style={{marginLeft:600,marginBottom:10}}>
           <Pagination  postsPerPage={postsPerPage} totalPosts={dataFromStore.appreducers.debitorsListFiltered.length} paginate={paginate}/>
          </div>
         {dataFromStore.appreducers.tableLoader ? <Loaders /> : null}
        </div>
  );
  
}


export default ManageDebtors

