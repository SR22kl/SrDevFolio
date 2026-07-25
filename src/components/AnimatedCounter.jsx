import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    const section = counterRef.current;

    if (!section) return;

    countersRef.current.forEach((counter, index) => {
      const numberElement = counter?.querySelector(".counter-number");
      const item = counterItems[index];

      if (!numberElement || !item) return;

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        duration: 2.5,
        ease: "power2.out",
        innerText: item.value,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          once: true,
          invalidateOnRefresh: true,
        },
        onComplete: () => {
          numberElement.innerText = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols mb-5">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
