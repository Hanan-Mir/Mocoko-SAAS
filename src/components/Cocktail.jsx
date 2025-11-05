import { useGSAP } from "@gsap/react"
import { cocktailLists, mockTailLists } from "../../constants"
import gsap from "gsap/all"

function Cocktail() {
    useGSAP(()=>{
        const cocktailTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktail',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true
            }
            
        })
        cocktailTimeline.from('#c-left-leaf',{
            x:-100,y:100
        })
        cocktailTimeline.from('#c-right-leaf',{
            x:100,y:100
        })
    })
    return (
        <section id="cocktail" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />
            <div className="list">
                <div className="popular">
                    <h2>Most popular Cocktails:</h2>
                    <ul>
                        {cocktailLists.map(({name,country,detail,price})=>{
                            return <li key={name}>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{country}|{detail}</p>

                                </div>
                                <span>
                                    - {price}

                                </span>
                            </li>
                        })

                        }
                    </ul>
                    
                </div>
                <div className="loved">
                    <h2>Most loved Mocktails:</h2>
                    <ul>
                        {mockTailLists.map(({name,country,detail,price})=>{
                            return <li key={name}>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{country}|{detail}</p>

                                </div>
                                <span>
                                    - {price}

                                </span>
                            </li>
                        })

                        }
                    </ul>
                    

                </div>
            </div>
           
        </section>
    )
}

export default Cocktail
