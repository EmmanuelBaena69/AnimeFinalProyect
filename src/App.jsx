import style from "./styles/style.css"
import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import Footer from "./components/footer"
import Slider from "./components/slider"

function App() {
  return (
      <>
        <Navbar/>
        <Slider/>
        <Main/>
        <Footer/>
        
      </>
  )
}

export default App
