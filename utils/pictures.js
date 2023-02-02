import ansairPNG from '../public/crew/image-anousheh-ansari.png';
import ansairWEBP from '../public/crew/image-anousheh-ansari.webp';
import hurleyPNG from '../public/crew/image-douglas-hurley.png';
import hurleyWEBP from '../public/crew/image-douglas-hurley.webp';
import markPNG from '../public/crew/image-mark-shuttleworth.png';
import markWEBP from '../public/crew/image-mark-shuttleworth.webp';
import victorPNG from '../public/crew/image-victor-glover.png';
import victorWEBP from '../public/crew/image-victor-glover.webp';
import moonPNG from '../public/destination/image-moon.png';
import moonWEBP from '../public/destination/image-moon.webp';
import marsPNG from '../public/destination/image-mars.png';
import marsWEBP from '../public/destination/image-mars.webp';
import titanPNG from '../public/destination/image-titan.png';
import titanWEBP from '../public/destination/image-titan.webp';
import europaPNG from '../public/destination/image-europa.png';
import europaWEBP from '../public/destination/image-europa.webp';
import vehicleL from '../public/technology/technology-vehicle.jpg';
import vehicleP from '../public/technology/image-launch-vehicle-portrait.jpg';
import capsuleL from '../public/technology/image-space-capsule-landscape.jpg';
import capsuleP from '../public/technology/image-space-capsule-portrait.jpg';
import spaceportL from '../public/technology/image-spaceport-landscape.jpg';
import spaceportP from '../public/technology/image-spaceport-portrait.jpg';


export const crewPic = [
  {
    png: hurleyPNG,
    webp: hurleyWEBP
  },
  {
    png: markPNG,
    webp: markWEBP
  },
  {
    png: victorPNG,
    webp: victorWEBP
  },
  {
    png: ansairPNG,
    webp: ansairWEBP
  }
];

export const destPic = {
  moon : {
    png: moonPNG,
    webp: moonWEBP
  },
  mars : {
    png: marsPNG,
    webp: marsWEBP
  },
  titan : {
    png: titanPNG,
    webp: titanWEBP
  },
  europa : {
    png: europaPNG,
    webp: europaWEBP
  }
}

/* 
p: portrait
l: landscape
*/
export const techPic = [
  {
    p: vehicleP,
    l: vehicleL
  },
  {
    p: spaceportP,
    l: spaceportL
  },
  {
    p: capsuleP,
    l: capsuleL,
  },
];