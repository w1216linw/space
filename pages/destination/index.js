import $ from 'jquery';
import data from "../../data.json";
import { activeSideBar, defaultSelected } from "../../utils/funcs";
import { destPic as pic } from '../../utils/pictures';

activeSideBar();
const { destinations } = data;

$(".destination-btn").on("click", (e) => {
  const dest = e.target.innerText.toLowerCase();
  defaultSelected(e.target);
  swapDestination(dest);
});

/* functions */
/**
 * @description replace related destination data
 * @param {*} destination 
 */
export const swapDestination = (dest) => {
  destinations.map((elem) => {
    if (elem.name.toLowerCase() === dest) {
      $("#description").text(elem.description);
      $("#title").text(elem.name);
      $("#distance").text(elem.distance);
      $("#trave-time").text(elem.travel);
      $("#destination-picture source").attr("srcset", pic[dest].webp);
      $("#destination-picture img").attr("src", pic[dest].png);
    }
  });
};