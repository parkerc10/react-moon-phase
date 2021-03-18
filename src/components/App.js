import MoonStatus from './MoonStatus/MoonStatus';
import UserLocation from './UserLocation/UserLocation';

function App() {
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, err => {
        alert(`${err.message}: Please enable location services for your browser`);
      });
    });
  };

  return (
    <div className="App">
      <MoonStatus getPosition={getPosition} />
      <UserLocation getPosition={getPosition} />
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
