import styled from 'styled-components';

const DivS = styled.div`
  display: flex;
  /* flex-direction: row;
  flex-wrap: wrap; */
  /* justify-content: center; */
  #cardTotal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }
  #card {
    background-color: #f5f5f5;
    border: rgb(250, 250, 250) 0.2em solid; 
    border-radius: 0.4em;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    margin: 5px;
    width: 160px;
    text-align: center;
  }
  img {
    border-radius: 8px;
    width: 100%;
  }
  #name {
    margin-top: 8px;
    margin-bottom: 2px;
    font-size: 18px;
  }
`;

export default DivS;
