import $ from 'jquery';

$('.menu-toggle').on('click', () => {
  $('.primary-navigation').toggleClass('show-menu')
  $('.menu-toggle').attr("aria-expanded", $('.primary-navigation').hasClass('show-menu'));
})