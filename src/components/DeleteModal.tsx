import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

function DeleteModal(props: any) {
  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <br />
        <p>삭제하시겠습니까?</p>
        <br />
      </Modal.Body>
      <ModalStyle>
        <Modal.Footer>
          <Button className="btn" onClick={props.onHide}>
            취소
          </Button>
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

export default DeleteModal;
