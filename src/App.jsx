// import logo from './logo.svg';
import './App.css';
import TodoHandler from './components/TodoHandler.jsx';

function App() {
  return (
    <div className="App">
      <header className="header-box">
            <h1>TASK TAB</h1> 
      </header>
      
      <TodoHandler/>
        <div className="glass-circle"/>
        <div className="glass-rombus"/>
        <div className="glass-poly"/>
      <div className="bg-square"/>
      <div className="bg-circle"></div>
    </div>
  );
}

export default App;
