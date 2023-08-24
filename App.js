
import './App.css';
import Navebar from './Components/Navbar';
import Bgimg from './Components/Bgimg'
import Royalpage from './Components/Royalpage'
import Textcontent from './Components/Textcontent'
import Columnrow from './Components/Columnrow';
import Textfourcolumn from './Components/Textfourcolumn';
import NewsEvents from './Components/NewsEvents';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navebar/> 
        <Bgimg/>
        <Royalpage/>
        <Textcontent/>
        <Columnrow/>
        <Textfourcolumn/>
        <NewsEvents/>
        <Footer/>
      </header>
      
    </div>
  );
}

export default App;
