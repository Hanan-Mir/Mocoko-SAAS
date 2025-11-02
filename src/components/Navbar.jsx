import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"


function Navbar() {
    useGSAP(()=>{
        const navigationTween=gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top', 
                scrub:2
            }
        })
        navigationTween.fromTo('nav',{backgroundColor:'transparent'},{
            backgroundColor:'#00000050',
            backdropFilter:'blur(15px)',
            duration:1,
            ease:'power1.inOut'
        })
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="" />
                    <p>MocoKo</p>
                </a>
                <ul>
                    {navLinks.map((links)=>(
                        <li key={links.id}>
                            <a href={`#${links.id}`}>{links.title}</a>
                        </li>
                    ))}
                </ul>


            </div>


        </nav>
    )
}

export default Navbar
