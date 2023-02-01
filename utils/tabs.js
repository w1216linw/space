import $ from "jquery";
const tabList = $('[role=tablist]');
const tabs = $('[role=tab]');

tabList.on('keydown', (e) => changeTabFocus(e));

let tabIndex = 0;
function changeTabFocus(e) {
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;

  if(e.keyCode === leftKey || e.keyCode === rightKey) {
    $(tabs[tabIndex]).attr('tabindex', -1);
  }

  if(e.keyCode === leftKey || e.keyCode === upKey) {
    tabIndex--;
    if(tabIndex < 0)
      tabIndex = tabs.length - 1;
  }

  if(e.keyCode === rightKey || e.keyCode === downKey) {
    tabIndex++;
    if(tabIndex >= tabs.length )
      tabIndex = 0;
  }

  $(tabs[tabIndex]).attr('tabindex', 0);
  $(tabs[tabIndex]).trigger('focus');
}