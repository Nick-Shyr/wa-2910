import "./lesson_16_hmw.scss";
import { Clock } from "./date_func";

let body = document.querySelector("body");

let clock = new Clock(body);
clock.render();
clock.currentDate();
clock.clickForChangeBg();
// currentDate();
