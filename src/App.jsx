import './App.scss';
import ResponsiveNavbar from './components/ResponsiveNavbar/ResponsiveNavbar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
