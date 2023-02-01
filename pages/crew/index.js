import $ from 'jquery';
import data from "../../data.json";
import { activeSideBar, defaultSelected } from "../../utils/funcs";

activeSideBar();
const { crew } = data;

$(".crew-list button").each((index, elem) => {
  $(elem).on('click', (e) => {
    defaultSelected(e.target);
    $('#crew-role').text(crew[index].role);
    $('#crew-bio').text(crew[index].bio);
    $('#crew-name').text(crew[index].name);
    $('#crew-picture source').attr("srcset", `../.${crew[index].images.webp}`);
    $('#crew-picture img').attr("src", `../.${crew[index].images.png}`).attr('alt', crew[index].role);
  })
})

