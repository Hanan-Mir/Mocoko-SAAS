import gsap from "gsap"
import Navbar from "./components/Navbar"
import { ScrollTrigger, SplitText } from "gsap/all"
import Hero from "./components/Hero"
import Cocktail from "./components/Cocktail"

function App() {
gsap.registerPlugin(ScrollTrigger,SplitText)
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktail />
          
           
        </main>
    )
}

export default App
