import $ from "jquery";
import data from "./data.json";
import { crewPic, destPic, techPic } from "./utils/pictures";

const { technology, crew, destinations } = data;
/* side bar */
const activeSideBar = () => {
  $(".menu-toggle").on("click", () => {
    $(".primary-navigation").toggleClass("show-menu");
    $(".menu-toggle").attr(
      "aria-expanded",
      $(".primary-navigation").hasClass("show-menu")
    );
  });
};

activeSideBar();

$(".technology-list button").each((index, elem) => {
  $(elem).on("click", (e) => {
    defaultSelected(e.target);
    $("#technology-name").text(technology[index].name);
    $("#technology-description").text(technology[index].description);
    $("#technology-picture source").attr("srcset", techPic[index].p);
    $("#technology-picture img")
      .attr("src", techPic[index].l)
      .attr("alt", technology[index].name);
  });
});

$(".destination-btn").on("click", (e) => {
  const dest = e.target.innerText.toLowerCase();
  defaultSelected(e.target);
  swapDestination(dest, destPic);
});

$(".crew-list button").each((index, elem) => {
  $(elem).on("click", (e) => {
    defaultSelected(e.target);
    $("#crew-role").text(crew[index].role);
    $("#crew-bio").text(crew[index].bio);
    $("#crew-name").text(crew[index].name);
    $("#crew-picture source").attr("srcset", crewPic[index].png);
    $("#crew-picture img")
      .attr("src", crewPic[index].webp)
      .attr("alt", crew[index].role);
  });
});

/* functions */
/**
 * @description default focus affect
 * @param {*} crew
 */
const defaultSelected = (selected) => {
  $("[aria-selected = true]").attr("aria-selected", false);
  $(selected).attr("aria-selected", true);
};

/**
 * @description replace related destination data
 * @param {*} destination
 */
const swapDestination = (dest, pic) => {
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
