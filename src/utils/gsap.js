import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

// iOS Safari: normalize scroll so pin + touch Observer work correctly
ScrollTrigger.normalizeScroll(true);

export { gsap, ScrollTrigger, Observer, ScrollToPlugin };
