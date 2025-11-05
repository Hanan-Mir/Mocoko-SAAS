import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function Art() {
    const isMobile=useMediaQuery({maxWidth:767})
    useGSAP(()=>{
        const start=isMobile?'top 20%':'top top'
        const maskTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#art',
                start,
                end:'bottom center',
                scrub:1.5,
                pin:true
            }
        })
        maskTimeline.to('.will-fade',{opacity:0,stagger:0.2,ease:'power1.inOut'})
        maskTimeline.to('.masked-img',{scale:1.6,maskPosition:'center',maskSize:'400%'})
        maskTimeline.to('#masked-content',{opacity:1,duration:1,ease:'power1.inOut',zIndex:5})
    })
  return (
    <section id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The Art</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => {
              return (
                <li key={index} className="flex items-center justify-start gap-2">
                  <img src="/images/check.png" alt="" />
                  <p>{feature}</p>
                </li>
              );
            })}
          </ul>
          <div className="cocktail-img">
            <img src="/images/under-img.jpg" alt="" className="abs-center masked-img size-full object-contain" />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => {
              return (
                <li key={index} className="flex items-center justify-start gap-2">
                  <img src="/images/check.png" alt="" />
                  <p>{feature}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="masked-container">
          <h3 className="will-fade">Sip-Worthy Perfection</h3>
          <div id="masked-content">
            <h3>Made with Craft- Poured with Passion</h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Art;
