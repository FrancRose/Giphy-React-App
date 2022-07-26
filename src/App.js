import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import Media from './components/Media';

function App() {
  return (
    <div className="App">
      <div className='main'>

        <Header />
        <SearchBar />
        <Media />

        
      </div>
    </div>
  );
}

export default App;
