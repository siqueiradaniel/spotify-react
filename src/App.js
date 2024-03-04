import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js'
import Footer from './Components/Footer/Footer.js';
import MainContainer from './Components/MainContainer/MainContainer.js';

function App() {
  return (
    <div>
      <Sidebar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
