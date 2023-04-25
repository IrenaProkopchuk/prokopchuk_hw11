import React from "react";
import "./Modal.css";
import { Fragment } from "react";

const Modal = ({ onClose }) => {
    return (
        <Fragment>
            <div className="modal-wrapper" onClick={onClose}></div>
            <div className="modal-window">
                <h3>Modal content</h3>
                <p>
                    <button onClick={onClose}>
                        x
                    </button>
                </p>
            </div>

        </Fragment>

    )
}

export default Modal;