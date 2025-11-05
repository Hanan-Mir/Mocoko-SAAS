import { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

function Menu() {
    const [currentIndex,setCurrentIndex]=useState(0);
    const contentRef=useRef();
    const goToSlide=(index)=>{
        const newIndex=(index+sliderLists.length)%sliderLists.length;
        setCurrentIndex(newIndex)
    }
    const getCocktailAt=(indexOffset)=>{
        return sliderLists[(currentIndex+indexOffset+sliderLists.length)%sliderLists.length]
    }
    const currentCocktail=getCocktailAt(0);
    const prevCocktail=getCocktailAt(-1);
    const nextCocktail=getCocktailAt(1);
    useGSAP(()=>{
        gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1})
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{xPercent:0,opacity:1,ease:'power1.inOut',duration:1})
        gsap.fromTo('.details h2',{yPercent:100,opacity:0},{yPercent:0,opacity:100,ease:'power1.inOut'})
        gsap.fromTo('.details p',{opacity:0,yPercent:100},{yPercent:0,opacity:100,ease:'power1.inOut'})
    },[currentIndex])
  return (
    <section id="menu">
      <img src="/images/slider-left-leaf.png" alt="" id="m-left-leaf" />
       <img src="/images/slider-right-leaf.png" alt="" id="m-right-leaf" />
    
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs">
        {sliderLists.map((cocktails, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktails.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={()=>goToSlide(index)}
            >
                {cocktails.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
            <button className="text-left" onClick={()=>goToSlide(currentIndex-1)}>
                <span>{prevCocktail.name}</span>
                <img src="/images/right-arrow.png" alt="" />
            </button>
              <button className="text-left"onClick={()=>goToSlide(currentIndex+1)}>
                <span>{nextCocktail.name}</span>
                <img src="/images/left-arrow.png" alt="" />
            </button>
        </div>
        <div className="cocktail">
            <img src={currentCocktail.image} alt="" />
        </div>
        <div className="recipe">
            <div ref={contentRef} className="info">
                <p>Recipe for:</p>
                <p id="title">
                    {currentCocktail.name}
                </p>
            </div>
            <div className="details">
                <h2>{currentCocktail.title}</h2>
                <p>{currentCocktail.description}</p>
                
            </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
