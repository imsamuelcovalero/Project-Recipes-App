import styled from 'styled-components';

const FooterS = styled.header`
  width: 100%;
  height: 45px;
  background: ${(props) => (props.corFundo ? props.corFundo : '#696969')};
  border: 1px solid black;
  color: #EFA00B;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  align-content: space-between;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 0;
  #drink {
    height: 40px;
    width: 40px;
    margin-left: 8px;
    border: none;
    // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;
  }
  #explore {
    height: 40px;
    width: 40px;
    border: none;
    // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;
  }
  #meal {
    height: 40px;
    width: 40px;
    margin-right: 8px;
    border: none;
    // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: transparent;
  }
`;

export default FooterS;
