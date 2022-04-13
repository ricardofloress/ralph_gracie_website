
import styled from "styled-components";

export const ModalWrapper = styled.div`
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(106 106 106 / 69%);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
`;

export const ModalContainer = styled.div`
    width: 40%;
    height: 70%;
    border-radius: 13px;
    color: white;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;

    @media screen and (max-width: 768px){
        width: 95%;
        height: 40%;
}
`;

export const ModalTitle = styled.div`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
`;

export const ModalTitleCloseBtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ModalTitleCloseBtn = styled.button`
    background-color: transparent;
    border: none;
    font-size: 25px;
    color: black;
    cursor: pointer;
`;

export const ModalBody = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
    overflow: auto;
`;

