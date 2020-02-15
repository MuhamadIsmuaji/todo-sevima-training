import React from 'react';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import styled from 'styled-components';

const ButtonCustom = styled(Button)`
  border-color: 1px black solid;
`;

function App() {
  return (
    <div>
      <Button color="info" outlined rounded size="large">
        Our Button
      </Button>
  
      <ButtonCustom>Tst</ButtonCustom>
    </div>
  );
}

export default App;
