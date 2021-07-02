import styled from "styled-components";

export const HomeSection = styled.div`
    margin: auto;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 500px;
`
export const HomeH3 = styled.h3`
    color: skyblue;
    font-weight: 400;
    padding: 0 30px;
`

export const ButtonWrappers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 30px;
`

export const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TextFieldWrapper = styled.div`
    width: 470px;
    padding-top: 30px;
    padding-left: 10px;
`

export const InputField = styled.input`
    border: 1;
    border-width: 1px;
    width: 470px;
    padding: 10px;
`

export const HomeTextTransactionWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: flex-end;
`

export const CheckBox = styled.input`
    font-weight: 200;
`

export const HomeBtnWrapper = styled.div`
    width: 490px;
    padding-left: 20px;
    padding-top: 30px;
    align-items: center;
`

export const ButtonDonate = styled.button`
    width: 100%;
    height: 50px;
    background-color: #181948;
    align-items: center;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    color: #fff;

    &:hover{
        background: #2B6881;
    }
`

