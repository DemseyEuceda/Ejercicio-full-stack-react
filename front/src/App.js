import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './blog/ShowBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<CompShowBlogs/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
