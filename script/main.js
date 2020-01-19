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

// Accordion List
const initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");

    function activeAccordion() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    accordionList.forEach(el => el.addEventListener("click", activeAccordion));
  }
};
initAccordion();
