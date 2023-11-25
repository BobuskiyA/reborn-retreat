import { useEffect, useRef } from 'react'
import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import Background from "@/images/overview/overview_background.jpg";
import portal from "@/images/overview/portal.svg"
import portalPeaceFirst from "@/images/overview/portal-peace-1.svg"
import portalPeaceSecond from "@/images/overview/portal-peace-2.svg"

import partTopLeft from "@/images/overview/overview_top-left.svg"
import partTopRight from "@/images/overview/overview_top-right.svg"
import partBottomLeft from "@/images/overview/overview_bottom-left.svg"
import partBottomRight from "@/images/overview/overview_bottom-right.svg"

import './Overview.scss'
import gsap, { Sine } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const random = (min: number, max: number) => {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
};

const Overview = () => {
  const portalParts = useRef<HTMLImageElement[]>([]);
  const overviewParts = useRef<HTMLImageElement[]>([]);
  const overviewPartsWrapper = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const randomX = random(1, 7);
    const randomY = random(1, 30);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(-10, 10);

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.overview',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.2,
      }
    });

    const moveX = (target: HTMLImageElement, direction: number) => {
      gsap.to(target, randomTime(), {
        xPercent: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    };

    const moveY = (target: HTMLImageElement, direction: number) => {
      gsap.to(target, randomTime(), {
        yPercent: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    };

    const rotate = (target: HTMLImageElement, direction: number) => {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    };

    portalParts.current.forEach((part) => {
      gsap.set(part, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });

      moveX(part, 1);
      moveY(part, -1);
      rotate(part, 1);
    });

    overviewParts.current.forEach((targetPeace, index) => {
      tl.to(targetPeace, {
        yPercent: gsap.utils.random(-200, 0),
        ease: 'none',
      }, 0);
    });

    overviewPartsWrapper.current.forEach(targetWrapper => {
      if (window.innerWidth > 1023) {
        document.addEventListener("mousemove", (e) => {
          const animationFactor = 0.01;
          const deltaX = (e.clientX - window.innerWidth / 0.2) * animationFactor;
          const deltaY = (e.clientY - window.innerHeight / 0.2) * animationFactor;
          gsap.to(targetWrapper, { x: deltaX, y: deltaY, duration: 0.75 });
        });
      }
    })
  }, []);
  
  return (
    <section className="overview">
      <FullWidthBg url={Background} customClass="overview__image">
        <div className="overview__text">
          <h1>Game Overview</h1>
          <p>
            Your journey kicks off in Crazy Hell with a modest stream of rewards, gradually filling your stash every few seconds. 
            
          <br />

            Navigate strategically as you enhance your stats to increase rewards, protect your stash from adversaries, and explore new planets, adventures, and challenges.
          </p>
        </div>


        
        <div
          className="overview__part-wrapper"
          ref={(el) => overviewPartsWrapper.current.push(el!)}
        >
          <img
            ref={(el) => overviewParts.current.push(el!)}
            src={partTopLeft}
            className="overview__part overview__part-1"
          />
        </div>
        
        <div
          className="overview__part-wrapper"
          ref={(el) => overviewPartsWrapper.current.push(el!)}
        >
          <img
            ref={(el) => overviewParts.current.push(el!)}
            src={partTopRight}
            className="overview__part overview__part-2"
          />
        </div>
        
        <div
          className="overview__part-wrapper"
          ref={(el) => overviewPartsWrapper.current.push(el!)}
        >
          <img
            ref={(el) => overviewParts.current.push(el!)}
            src={partBottomLeft}
            className="overview__part overview__part-3"
          />
        </div>
        
        <div
          className="overview__part-wrapper"
          ref={(el) => overviewPartsWrapper.current.push(el!)}
        >
          <img
            ref={(el) => overviewParts.current.push(el!)}
            src={partBottomRight}
            className="overview__part overview__part-4"
          />
        </div>

        <div className="portal">
          <img 
            ref={(el) => portalParts.current.push(el!)}
            src={portalPeaceFirst}
            className="portal-peace portal-peace-1"
          />
          <img
            ref={(el) => portalParts.current.push(el!)}
            src={portalPeaceSecond}
            className="portal-peace portal-peace-2"
          />
          <img
            src={portal}
            alt="portal"
            className="portal__main"
          />
        </div>
      </FullWidthBg>
    </section>
  );
};

export default Overview;