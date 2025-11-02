import { useRef } from "react"
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { splitColor, SplitText } from "gsap/all";

function Hero() {
    const videoRef=useRef();
    const isMobile=useMediaQuery({maxWidth:767});
    useGSAP(()=>{
        const heroSplit=new SplitText('.title',{type:'chars,words'})
        const paragraphSplit=new SplitText('.subtitle',{type:'lines'})
        heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:2,
            ease:'expo.out',
            stagger:0.08
        })
        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.5,
            ease:'expo.out',
            stagger:0.08,
            delay:0.5
        })
        //This timeline is related to the leaf
        const LeafTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub:true
            }
        })
        LeafTimeline.to('.right-leaf',{y:250},0)
         LeafTimeline.to('.left-leaf',{y:-250},0)
         //This timeline is related to the video
         const startValue=isMobile?'top 50%':'center 60%';
         const endValue=isMobile?'120% top':'bottom top'
         const videoTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'video',
                start:startValue,
                end:endValue,
                scrub:true,
                pin:true
            }
         })
         videoRef.current.onloadedmetadata=()=>{
            videoTimeline.to(videoRef.current,{
                currentTime:videoRef.current.duration
            })
         }
        
    },[])

    return (
        <>
        <section id="Hero" className="noisy">
            <h1 className="title">MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool,Crisp,Classic</p>
                        <p className="subtitle">Sip the Spirit <br /> of Summer</p>

                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail is a blend of fresh ingredients and a passion for
                perfecting every pour, whether you're celebrating or simply
                relaxing.
                        </p>
                        <a href="#cocktails">View Cocktails</a>

                    </div>
                </div>
            </div>
            </section>
            <div className="video absolute inset-0">
            
                <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto"></video>
            </div>
            </>

    )
}

export default Hero
