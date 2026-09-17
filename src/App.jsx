import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header
        universityName="Assam down town University"
        department="Faculty of Computer Technology"
      />

      <MainContent />

      <Footer
        universityName="Assam down town University"
        copyrightYear="2026"
      />
    </div>
  );
}

export default App;