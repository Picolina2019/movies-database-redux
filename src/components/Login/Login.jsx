import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { withAuth } from '../../hoc/withAuth';
import LoginForm from './LoginForm';

function Login({ auth, authActions }) {
  return (
    <Modal isOpen={auth.showLoginModal} toggle={authActions.toggleLoginModal}>
      <ModalBody>
        <LoginForm />
      </ModalBody>
    </Modal>
  );
}

export default withAuth(Login);
