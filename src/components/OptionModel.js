import React from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
Modal.setAppElement('#app')
const OptionModal =(props)=>(
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModalOkay}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">Selected option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleModalOkay}>Okay</button>
    </Modal>
);


export default OptionModal;
