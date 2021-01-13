import './App.css';
import FullName from "./component/profile/FullName"
import ProfilPhoto from "./component/profile/ProfilPhoto"
import Address from "./component/profile/Address"

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
