import './App.css';
import PreviewImage from './components/PreviewImage';
import ImageList from './components/ImageList';
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h2>Zevo Image Gallary</h2>
      </header>
      <section className="app-section">
          <ImageList />
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
