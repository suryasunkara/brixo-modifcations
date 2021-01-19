
import React, { Fragment, useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import { FaLessThanEqual } from 'react-icons/fa';
import {  Alert } from "reactstrap";
import Loaders from "../../src/components/modals/loader";

const ChangePassword=(props)=>{
    const [oldpassword,setoldpassword]=useState();
    const[newpassword,setnewpassword]=useState();
    const[confirmpassword,setconfirmpassword]=useState();
      const[employeeId,setemployeeId]=useState();
    const[emptyFieldsFlag,setemptyFieldsFlag]=useState(false);
    const[passwordMismatchFlag,SetpasswordMismatchFlag]=useState(false);
    const[onsuccess,setonsuccess]=useState();
    const[successalert,setsuccessalert]=useState(false);
    const[loader,setloader]=useState(false);

    useEffect(()=>{
        setemployeeId(localStorage.getItem('empid'));

    },[])

    const onUpdate=()=>{
        if(oldpassword && newpassword && confirmpassword != "")
        {
                if(newpassword == confirmpassword)
        {
        var payload={
            "id": employeeId,
             "newPassword": newpassword,
            "oldPassword": oldpassword
        }
setloader(true);
axios.put('http://gotracrat.in:8098/api/v1/user/changepassword',payload).then(res=>{

    console.log(res.data);
    setloader(false);
    setsuccessalert(true);
   setonsuccess(res.data);
   setTimeout(() => {
    setsuccessalert(false);
  }, 5000);

})
}else{
SetpasswordMismatchFlag(true);
setTimeout(() => {
    SetpasswordMismatchFlag(false);
  }, 5000);
}     
    }
    else{
      setemptyFieldsFlag(true);
      setTimeout(() => {
        setemptyFieldsFlag(false);
      }, 5000);
    }
    }
return(
    <div className="animated-fadeIn">
         <br/>  <br/>
         <div className="container-fluid">
             
         <div className="row">
         <div className="col-sm-12">
             {emptyFieldsFlag?
              <Alert color="danger">
              The fields with aestrik(*) are mandatory!
         </Alert>:null
         }
          {passwordMismatchFlag?
              <Alert color="danger">
              Newpassword and Confirm NewPassword are not same!
         </Alert>:null
         }
         {successalert?
              <Alert color="primary">
             {onsuccess}
         </Alert>:null
         }
         <div className="card">
         <div className="card-header"  style={{backgroundColor:'#333333',color:'white'}}>
         <h5> ChangePassword</h5>
         </div>
         <div className="card-body">
         <form className="needs-validation theme-form" noValidate="" >
         <div className="form-row">
         <div className="form-group col-sm-6 row">
         <label className="col-sm-3 col-form-label" htmlFor="oldpassword">OldPassword<span>*</span></label>
         <div className="col-sm-8">
         <input className="form-control" id="oldpassword" placeholder="Enter OldPassword" type="text" value={oldpassword}  name="oldpassword" onChange={e=>setoldpassword(e.target.value)} />
         </div>
         </div>
         <div className="form-group col-sm-6 row">
         <label className="col-sm-3 col-form-label" htmlFor="newpassword">NewPassword<span>*</span></label>
         <div className="col-sm-8">
         <input className="form-control" id="newpassword" placeholder="Enter NewPassword" type="text" value={newpassword}  name="newpassword" onChange={e=>setnewpassword(e.target.value)} />
         </div>
         </div>
         </div>
         <div className="form-row">
         <div className="form-group col-sm-6 row">
         <label className="col-sm-3 col-form-label" htmlFor="comfirmnewpassword">Confirm NewPassword<span>*</span></label>
         <div className="col-sm-8">
         <input className="form-control" id="confirmnewpassword" placeholder="Enter NewPassword" type="text" value={confirmpassword}  name="confirmnewpassword" onChange={e=>setconfirmpassword(e.target.value)} />
         </div>
         </div>
         </div>
         <div>
           <Link  to={`${process.env.PUBLIC_URL}/pages/manageresources`}>
         <button className="btn btn-pill  float-right margin-top-30" type="button"  style={{backgroundColor:'#333333',color:'white'}} >Back</button>
         </Link>
         </div> 
         <div>
         <button className="btn btn-pill  margin-top-30 " type="button"  style={{backgroundColor:'#333333',color:'white'}} onClick={onUpdate}  >Update</button>
         </div>
        
         </form>
         </div>
         </div>
         </div>
         </div>
         </div>
         {loader?
         <Loaders/>:null}
    </div>
    
)

}
export default ChangePassword;