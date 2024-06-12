import Cabecalho from './componentes/Cabecalho/Cabecalho';
import styled from 'styled-components';
import Corpo from './componentes/Corpo/Corpo';

const AppContainer = styled.div`

`
function Home() {
  return (
    <AppContainer>       
        <Corpo/>
    </AppContainer>
  );
}
export default Home;
