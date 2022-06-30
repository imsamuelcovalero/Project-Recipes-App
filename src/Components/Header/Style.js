import styled from 'styled-components';

export const HeaderS = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  background: ${(props) => (props.corFundo ? props.corFundo : '#696969')};
  border: 1px solid black;
  color: #e7bd42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  align-content: space-between;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  input[type="radio"] {
    all: revert;
  }
  #titulo {
    display: flex;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }
  #profile {
    height: 40px;
    width: 40px;
    margin-left: 8px;
    border: none;
    // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;
  }
  #search {
    height: 40px;
    width: 40px;
    margin-right: 8px;
    border: none;
    margin-bottom: 0;
    // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;
  }
  #titleNoSearch {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    margin-right: 33.52px;
  }
  #searchInput {
    border-radius: 10px;
    background-color: #dadada;
    border: solid #888 2px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: black;
    display: flex;
    margin-top:125px;
    flex-direction: column;
  }
`;

export default HeaderS;
