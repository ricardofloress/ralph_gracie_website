import React from "react";
import { ModalBody, ModalTitle, ModalContainer, ModalTitleCloseBtn, ModalTitleCloseBtnWrapper, ModalWrapper } from './ModalElements';

function Modal({ toggleModalProp, children }) {

    return (
        <ModalWrapper>
            <ModalContainer>
                <ModalTitleCloseBtnWrapper>
                    <ModalTitleCloseBtn
                        onClick={() => {
                            toggleModalProp();
                        }}
                    >
                        X
                    </ModalTitleCloseBtn>
                </ModalTitleCloseBtnWrapper>

                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContainer>
        </ModalWrapper>
    );
}

export default Modal;