import './App.css';
import GoldPrice from './GoldPrice';

function App() {
  return (
    <div>
      <center style={{ background: 'teal', padding: '10px' }}>
        <h1 style={{ color: 'white', padding: '15px' }}>Welcome People</h1>
        <h2 style={{ color: 'white' }}>Gold Price Daily</h2>
      </center>
      <hr />
      <div>
        <center style={{ padding: '10px', color: 'white' }}>
          <GoldPrice />
        </center>
      </div>
    </div>
  );
}

export default App;
