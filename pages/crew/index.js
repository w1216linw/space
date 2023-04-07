import $ from "jquery";
import data from "../../data.json";
import { activeSideBar, defaultSelected } from "../../utils/funcs";
import { crewPic as pic } from "../../utils/pictures";

activeSideBar();
const { crew } = data;

$(".crew-list button").each((index, elem) => {
  $(elem).on("click", (e) => {
    defaultSelected(e.target);
    $("#crew-role").text(crew[index].role);
    $("#crew-bio").text(crew[index].bio);
    $("#crew-name").text(crew[index].name);
    $("#crew-picture source").attr("srcset", pic[index].png);
    $("#crew-picture img")
      .attr("src", pic[index].webp)
      .attr("alt", crew[index].role);
  });
});
