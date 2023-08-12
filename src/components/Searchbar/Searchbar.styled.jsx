import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 400px;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
export const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #6d90a8;
  /* opacity: 0.6; */
  /* transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #d4e0e9;
  }
`;

export const BtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
