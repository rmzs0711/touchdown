import {Button, List} from '@telegram-apps/telegram-ui';
import './App.css';
import FullWidthButton from "./components/fullWidthButton.tsx";

async function sendRequest(dataset: string) {
  try {
    console.log("Hello mega");
    const url = 'http://localhost:6868/api/dataset/';

    const response = await fetch(url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: dataset }),
      }
    );
    const data = await response.json();
    window.console.log(`${data.message}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

function App() {
  return (
    <>
      <h1>Welcome to TouchDown</h1>
      <List>
        <Button size="l" onClick={() => sendRequest("Dataset #1")}>
          Dataset #1
        </Button>
        <FullWidthButton size="l" onClick={() => sendRequest("Dataset #2")}>
          Dataset #2
        </FullWidthButton>
        <FullWidthButton size="l" onClick={() => sendRequest("Dataset #3")}>
          Dataset #3
        </FullWidthButton>
      </List>
    </>
  );
}

export default App