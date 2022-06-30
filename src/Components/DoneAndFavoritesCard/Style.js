import styled from 'styled-components';

export const DivS = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #dbdad6;
image {
  width: 300px;
}
#favoriteBtn {
  margin-top: 8px;
}
#imgDiv {
  width: 100%;
  display: flex;
  justify-content: center;
}
#imagem {
  margin-top: 10px;
  width: 300px;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 18px;
}
#textDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#boldTitle {
  font-weight: bold;
}
`;

export default DivS;
