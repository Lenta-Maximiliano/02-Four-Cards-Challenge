import Header from './components/Header/Header';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (
    <div className='appContainer'>
      <main className='mainContainer'>
        <Header />
        <CardsContainer />
        < Footer />
      </main>
    </div>
  )
}

export default App
