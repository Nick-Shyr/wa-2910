import "./lesson_16_hmw.scss";
import { Clock } from "./date_func";

let body = document.querySelector("body");

let clock = new Clock(body);
clock.renderFull();
clock.startClock();
clock.clickForChangeBg();
clock.clickForChangeType();
// currentDate();
