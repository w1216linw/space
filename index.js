import $ from "jquery";
import ansairPNG from "./assets/crew/image-anousheh-ansari.png";
import ansairWEBP from "./assets/crew/image-anousheh-ansari.webp";
import hurleyPNG from "./assets/crew/image-douglas-hurley.png";
import hurleyWEBP from "./assets/crew/image-douglas-hurley.webp";
import markPNG from "./assets/crew/image-mark-shuttleworth.png";
import markWEBP from "./assets/crew/image-mark-shuttleworth.webp";
import victorPNG from "./assets/crew/image-victor-glover.png";
import victorWEBP from "./assets/crew/image-victor-glover.webp";
import europaPNG from "./assets/destination/image-europa.png";
import europaWEBP from "./assets/destination/image-europa.webp";
import marsPNG from "./assets/destination/image-mars.png";
import marsWEBP from "./assets/destination/image-mars.webp";
import moonPNG from "./assets/destination/image-moon.png";
import moonWEBP from "./assets/destination/image-moon.webp";
import titanPNG from "./assets/destination/image-titan.png";
import titanWEBP from "./assets/destination/image-titan.webp";
import vehicleL from "./assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleP from "./assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleL from "./assets/technology/image-space-capsule-landscape.jpg";
import capsuleP from "./assets/technology/image-space-capsule-portrait.jpg";
import spaceportL from "./assets/technology/image-spaceport-landscape.jpg";
import spaceportP from "./assets/technology/image-spaceport-portrait.jpg";
import data from "./data.json";

const crewPic = [
  {
    png: hurleyPNG,
    webp: hurleyWEBP,
  },
  {
    png: markPNG,
    webp: markWEBP,
  },
  {
    png: victorPNG,
    webp: victorWEBP,
  },
  {
    png: ansairPNG,
    webp: ansairWEBP,
  },
];

const destPic = {
  moon: {
    png: moonPNG,
    webp: moonWEBP,
  },
  mars: {
    png: marsPNG,
    webp: marsWEBP,
  },
  titan: {
    png: titanPNG,
    webp: titanWEBP,
  },
  europa: {
    png: europaPNG,
    webp: europaWEBP,
  },
};

/* 
p: portrait
l: landscape
*/
const techPic = [
  {
    p: vehicleP,
    l: vehicleL,
  },
  {
    p: spaceportP,
    l: spaceportL,
  },
  {
    p: capsuleP,
    l: capsuleL,
  },
];

const { technology, crew, destinations } = data;
const tabList = $("[role=tablist]");
const tabs = $("[role=tab]");
let tabIndex = 0;

function changeTabFocus(e) {
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;

  if (e.keyCode === leftKey || e.keyCode === rightKey) {
    $(tabs[tabIndex]).attr("tabindex", -1);
  }

  if (e.keyCode === leftKey || e.keyCode === upKey) {
    tabIndex--;
    if (tabIndex < 0) tabIndex = tabs.length - 1;
  }

  if (e.keyCode === rightKey || e.keyCode === downKey) {
    tabIndex++;
    if (tabIndex >= tabs.length) tabIndex = 0;
  }

  $(tabs[tabIndex]).attr("tabindex", 0);
  $(tabs[tabIndex]).trigger("focus");
}

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

window.changeTabFocus = changeTabFocus;
window.defaultSelected = defaultSelected;
window.swapDestination = swapDestination;

/* tab */
tabList.on("keydown", (e) => changeTabFocus(e));

/* side bar */
$(".menu-toggle").on("click", () => {
  $(".primary-navigation").toggleClass("show-menu");
  $(".menu-toggle").attr(
    "aria-expanded",
    $(".primary-navigation").hasClass("show-menu")
  );
});

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
