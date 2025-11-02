import gsap from "gsap"
import Navbar from "./components/Navbar"
import { ScrollTrigger, SplitText } from "gsap/all"
import Hero from "./components/Hero"

function App() {
gsap.registerPlugin(ScrollTrigger,SplitText)
    return (
        <main>
            <Navbar />
            <Hero />
            <section className="bg-red-400 w-full h-[100vh]">

            </section>
           
        </main>
    )
}

export default App
