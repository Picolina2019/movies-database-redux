import React ,{useState} from 'react';
import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

function Login({handleUser, handleSessionId}) {
 const [showModal, setShowModal]= useState(false)
const toggleLoginModal=()=>{
  setShowModal(!showModal)
}
  return (
    <>
      <button
        className='btn btn-outline-info'
        type='button'
        onClick={toggleLoginModal}>
        Login
      </button>
      <Modal isOpen={showModal} toggle={toggleLoginModal}>
        <ModalBody>
          <LoginForm handleUser={handleUser} handleSessionId={handleSessionId} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default Login;
