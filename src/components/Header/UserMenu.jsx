import React, { useState} from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
// import { API_KEY_3, API_URL, fetchApi } from '../../api/api';

const UserMenu =({onLogout, user}) =>{
 const [ dropdownOpen, setDropdownOpen] = useState(false)
 
  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  };
  // handleLogout=()=>{
  //     const { session_id, onLogout } = this.props;
  //   fetchApi(`${API_URL}/authentication/session?api_key=${API_KEY_3}`, {
  //     method: 'DELETE',
  //     mode: 'cors',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       session_id: session_id,
  //     }),
  //   }).then(() => {
  //      onLogout();
  //   });
   
  // }
  // render() {
   
  //   const { user } = this.props;
  //   const {dropdownOpen} = this.state
  //   const {toggle,handleLogout} = this
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          tag='div'
          data-toggle='dropdown'
          area-expanded={dropdownOpen}
          onClick={toggle}>
          <div onClick={toggle}> {user.username}</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={onLogout}>Exit</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

export default UserMenu;
