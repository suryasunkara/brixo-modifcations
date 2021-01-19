import React, { Fragment ,useEffect, useState} from 'react';
import man from '../../../assets/images/avtar/avatar_cus_1.jpg'
import { Link } from 'react-router-dom';
import { Edit } from 'react-feather';

const UserPanel = () => {
    const url = '';
const [role,setrole]=useState();
const[userName,setuserName]=useState();
useEffect(()=>{
           
  
  var role=localStorage.getItem('permissionname');
setrole(role);
var name=localStorage.getItem('username');
setuserName(name);

})


    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-60 rounded-circle lazyloaded blur-up" src={url ? url : man} alt="#" />
                    <div className="profile-edit">
                        {/*<Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>*/}
                        {/*    <Edit />*/}
                        {/*</Link>*/}
                    </div>
                </div>
               
                <b>
                <h5 style={{color:'#333333'}} className="mt-3 f-14">ROLE:CREDITOR</h5>
                </b>
                
    
   
             {/* <p>{role}</p> */}
            </div>
        </Fragment>
    );
};

export default UserPanel;