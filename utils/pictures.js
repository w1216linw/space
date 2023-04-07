import ansairPNG from "../assets/crew/image-anousheh-ansari.png";
import ansairWEBP from "../assets/crew/image-anousheh-ansari.webp";
import hurleyPNG from "../assets/crew/image-douglas-hurley.png";
import hurleyWEBP from "../assets/crew/image-douglas-hurley.webp";
import markPNG from "../assets/crew/image-mark-shuttleworth.png";
import markWEBP from "../assets/crew/image-mark-shuttleworth.webp";
import victorPNG from "../assets/crew/image-victor-glover.png";
import victorWEBP from "../assets/crew/image-victor-glover.webp";
import europaPNG from "../assets/destination/image-europa.png";
import europaWEBP from "../assets/destination/image-europa.webp";
import marsPNG from "../assets/destination/image-mars.png";
import marsWEBP from "../assets/destination/image-mars.webp";
import moonPNG from "../assets/destination/image-moon.png";
import moonWEBP from "../assets/destination/image-moon.webp";
import titanPNG from "../assets/destination/image-titan.png";
import titanWEBP from "../assets/destination/image-titan.webp";
import vehicleP from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleL from "../assets/technology/image-space-capsule-landscape.jpg";
import capsuleP from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportL from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportP from "../assets/technology/image-spaceport-portrait.jpg";
import vehicleL from "../assets/technology/technology-vehicle.jpg";

export const crewPic = [
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

export const destPic = {
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
export const techPic = [
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
