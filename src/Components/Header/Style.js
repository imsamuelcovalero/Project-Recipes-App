import styled from 'styled-components';

export const HeaderS = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  background: ${(props) => (props.corFundo ? props.corFundo : '#4D7C8A')};
  border: 1px solid black;
  color: #EFA00B;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  align-content: space-between;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  #titulo {
    display: flex;
    text-align: center;
    margin-bottom: 0;
  }
  #profile {
    margin-left: 8px;
    border: none;
    // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;
  }
  #search {
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

export default HeaderS;
