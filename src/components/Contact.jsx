import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import gsap, { SplitText } from "gsap/all";

function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    timeline.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    }).from('#contact h3,#contact p',{
        opacity:0,yPercent:100,stagger:0.02
    }).to('#f-right-leaf',{
        y:'-50',duration:1,ease:'power1.inOut'
    }).to('#f-left-leaf',{
        y:'-50',duration:1,ease:'power1.inOut'
    });
  });
    console.log(socials[0])
  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="" id="f-left-leaf" />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>XYZ, XYZ, XYZ</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>7780964843</p>
          <p>hello@mocktail.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => {
            return (
              <p key={time.day}>
                {time.day} : {time.time}
              </p>
            );
          })}
        </div>

        
      </div>
    </footer>
  );
}

export default Contact;
