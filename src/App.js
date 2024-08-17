import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main-content'>
        <Header />
        <Board />
      </div>
    </div>
  );
}

export default App;
