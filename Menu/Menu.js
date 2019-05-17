
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu reference.
  e.stopPropagation();
  menu.classList.toggle(`open`);
  if (menu.classList.contains(`open`)) {
    TweenMax.to(menu, 2, {
      x:350,
    });
  } else {
    TweenMax.to(menu, 2, {
      x:-350,
    });
  }
}
const menuItem = document.querySelectorAll(`.menu ul li`);
document.body.addEventListener(`click`, (e) => {
  if (e.target !== menu && !Array.from(menuItem).includes(e.target)) {
    if (menu.classList.contains(`open`)) {
      menu.classList.toggle(`open`);
      TweenMax.to(menu, 2, {
        x:-350,
      });
    }
  }
});

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(`.menu`);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(`.menu-button`);

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener(`click`, toggleMenu);
