import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

function EmptyInputModal(props: any) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <br />
        <p>할 일을 입력해주세요.</p>
        <br />
      </Modal.Body>
      <ModalStyle>
        <Modal.Footer>
          <Button className="btn" onClick={props.onHide}>
            확인
          </Button>
        </Modal.Footer>
      </ModalStyle>
    </Modal>
  );
}

const ModalStyle = styled.div`
  .modal-footer {
    border: none;
    .btn {
      color: ${(props) => props.theme.color.txt};
      background-color: ${(props) => props.theme.color.main};
      border: none;
    }
  }
`;

export default EmptyInputModal;
