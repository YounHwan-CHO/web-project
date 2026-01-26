import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Goals from './components/Goals';
import BookList from './components/BookList';
import Quotes from './components/Quotes'; // 추가! (스컬!)
import Contact from './components/Contact';
import Intro from './components/Intro'; // 1. 추가 (스컬!)

function App() {
  return (
    <div className="App">
      <Header />
     <main>
  <Home />
  <About />
  <Intro /> {/* 여기에 추가하면 자기소개서가 딱! (스컬!) */}
  <Quotes />
  <Skills />
  <Goals />
  <BookList />
  <Contact />
</main>
      <footer style={{ padding: '40px', color: '#555' }}>
        © 2026 Jo Yun Hwan. Built with React. 스컬.
      </footer>
    </div>
  );
}

export default App;