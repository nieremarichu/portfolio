// client-entry.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  AOS.init();
  AOS.refresh();
}