import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './blog/ShowBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <CompShowBlogs></CompShowBlogs>
    </div>
  );
}

export default App;
