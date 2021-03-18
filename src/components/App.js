import MoonStatus from './MoonStatus/MoonStatus';
import UserLocation from './UserLocation/UserLocation';

function App() {
  return (
    <div className="App">
      <MoonStatus />
      <UserLocation />
      <footer>
        <div>
          Icons made by{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
