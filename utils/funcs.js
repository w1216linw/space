import $ from 'jquery';

/**
 * @description default focus affect
 * @param {*} crew 
 */
export const defaultSelected = (selected) => {
  $('[aria-selected = true]').attr('aria-selected', false);
  $(selected).attr('aria-selected',true);
}

/* side bar */
export const activeSideBar = () => {
  $(".menu-toggle").on("click", () => {
    $(".primary-navigation").toggleClass("show-menu");
    $(".menu-toggle").attr(
      "aria-expanded",
      $(".primary-navigation").hasClass("show-menu")
    );
  });
}