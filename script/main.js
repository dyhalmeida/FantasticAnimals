// TabMenu
const initTabMenu = () => {
  const tabMenuList = document.querySelectorAll(".js-tabmenu li");
  const tabContentList = document.querySelectorAll(".js-tabcontent section");

  if (tabMenuList.length && tabContentList.length) {
    tabContentList[0].classList.add("active");
    const activeTab = index => {
      tabContentList.forEach(el => el.classList.remove("active"));
      tabContentList[index].classList.add("active");
    };

    tabMenuList.forEach((el, index) => {
      el.addEventListener("click", () => activeTab(index));
    });
  }
};
initTabMenu();
