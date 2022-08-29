import styled from 'styled-components';

export const DivS = styled.header`
  color: #B30E16;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ search }) => (search ? '5px' : '53px')};
  justify-content: space-evenly;
  gap: 10px;
  button {
    width: 150px;
    margin: 0px 4px;
    padding: 12px 5px;
    border-radius: 20px;
    // #B30E16
    border: 1px solid #E7BD42;
    background-color: #ffffff;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    transition: all .5s ease;
    text-align: center;
  }
`;

export default DivS;
