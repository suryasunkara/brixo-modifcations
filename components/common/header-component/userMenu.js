import React, { Fragment, useState, useEffect } from 'react';
import man from '../../../assets/images/avtar/avatar_cus_1.jpg';
import { LogOut } from 'react-feather';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import { AiFillSetting } from "react-icons/ai";
const UserMenu = ({ history }) => {
    const [profile, setProfile] = useState('');

    useEffect(() => {
        setProfile(localStorage.getItem('profileURL') || man);
    }, []);

    const logOut = () => {
        localStorage.removeItem('profileURL');
        history.push(`${process.env.PUBLIC_URL}/pages/login`);
      
    }

    return (
        <Fragment>
            <li className="onhover-dropdown">
                <div className="media align-items-center">
                    <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={profile} alt="header-user" />
                </div>
                <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                {/* `${process.env.PUBLIC_URL}/dashboard/changepassword` */}
                    {<li> <Link to={'#'}>  
                       <AiFillSetting />ChangePassword
                      </Link></li> }
                    <Link to={`${process.env.PUBLIC_URL}/pages/login`}>
                    <li><LogOut /> Log out</li>
                    </Link>
                      
                </ul>
            </li>
        </Fragment>
    );
};


export default withRouter(UserMenu);