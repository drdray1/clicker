import './App.css';

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ClickyButton from './FoxComponents/ClickyButton';
import Boop from './FoxComponents/Boop';

import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(95950);

  function increment() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }


  // Center ClickyButton in the middle of the page
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={4}>

          <Boop rotation={20} timing={200}>
            <Typography variant="h1">
              {count}
            </Typography>
          </Boop>

          <ClickyButton increment={increment}/>

          <Boop rotation={10} timing={100}>
            <MyResetButton onClick={handleReset}/>
          </Boop>
        </Stack>
      </Box>
    </div>
  );
}

function MyResetButton({ onClick }) {
  return (
    <button onClick={onClick} type="button" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
      <Button variant="contained" size="large">
        RESET
      </Button>
    </button>
  );
}