import gsap from "gsap"
import Navbar from "./components/Navbar"
import { ScrollTrigger, SplitText } from "gsap/all"
import Hero from "./components/Hero"
import Cocktail from "./components/Cocktail"
import About from "./components/About"
import Art from "./components/Art"

function App() {
gsap.registerPlugin(ScrollTrigger,SplitText)
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktail />
            <About />
            <Art />
          
           
        </main>
    )
}

export default App
