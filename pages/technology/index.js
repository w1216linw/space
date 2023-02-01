import $ from "jquery";
import data from "../../data.json";
import { defaultSelected } from "../../utils/funcs";
import { activeSideBar } from "../../utils/funcs";

activeSideBar();
const { technology } = data;

$(".technology-list button").each((index, elem) => {
  $(elem).on('click', (e) => {
    defaultSelected(e.target);
    $('#technology-name').text(technology[index].name);
    $('#technology-description').text(technology[index].description);
    $('#technology-picture source').attr("srcset", `../.${technology[index].images.portrait}`);
    $('#technology-picture img').attr("src", `../.${technology[index].images.landscape}`).attr('alt', technology[index].name);
  })
})