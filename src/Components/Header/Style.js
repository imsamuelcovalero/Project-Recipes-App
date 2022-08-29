import styled from 'styled-components';

export const HeaderS = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  margin-bottom: 100px;
  background: ${(props) => (props.corFundo ? props.corFundo : '#696969')};
  border: 1px solid black;
  color: #e7bd42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  align-content: space-between;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  #titulo {
    display: flex;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
    font-size: ${({ fromNationalities }) => (fromNationalities && '20px')};
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
`;

export const SearchS = styled.div`
  margin-top: ${({ fromNationalities }) => (fromNationalities ? '40px' : '45px')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  color: #B30E16;
  background-color: #dbdad6;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  input[type="radio"] {
    all: revert;
  }
  label {
    margin-bottom: 0;
  }
  #searchText {
    margin-top: 5px;
    border-radius: 8px;
    border: 2px solid #E7BD42 !important;
    background-color: #ffffff;
    ::placeholder {
      color: #dbdad6;
    }
    width: 100%;
  }
  #radios {
    width: 100%;
    padding: 0 10px;
    font-weight: bold;
    color: #696969 !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0 !important;
  }
  button {
    text-align: center;
    font-weight: bold;
    color: #E7BD42;
    border: 2px solid #E7BD42 !important;
    background-color: #696969;
    width: 160px;
    margin-bottom: 5px;
  }
`;

export default HeaderS;
