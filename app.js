// Selectors for the first dropdown
const dropList = document.querySelectorAll(".list");
const arrowDown = document.querySelectorAll(".arrow-down");
const arrowUp = document.querySelectorAll(".arrow-up");
const dropdownContainer = document.querySelectorAll(".dropdown-container");

// Selectors for the sidebar menu
const menuIcon = document.querySelector(".menu-icon");
const layout = document.querySelector(".layout");
const secondNavbar = document.querySelector(".second-navbar");
const closeIcon = document.querySelector(".close-menu");

// Selectors for the second dropdown in the sidebar menu
const secondDropList = document.querySelectorAll(".second-list");
const secondDropdownContainer = document.querySelectorAll(
  ".second-dropdown-container"
);
const secondArrowDown = document.querySelectorAll(".second-navbar .arrow-down");
const secondArrowUp = document.querySelectorAll(".second-navbar .arrow-up");

// Selectors for individual list items in the second dropdown
const lis = document.querySelectorAll(".second-dropdown-container li");

// Event listeners for the first dropdown
dropList.forEach((list, index) => {
  list.addEventListener("click", () => showlist(index));
});

// Function to toggle classes for the first dropdown
function showlist(index) {
  arrowDown[index].classList.toggle("hiding");
  arrowUp[index].classList.toggle("show");
  dropdownContainer[index].classList.toggle("show");
}

// Separation line for better readability
//||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Event listeners for the second dropdown in the sidebar menu
secondDropList.forEach((list, index) => {
  list.addEventListener("click", () => showSecondList(index));
});

// Event listener for the sidebar menu icon
menuIcon.addEventListener("click", showSidebar);

// Event listener for the close icon in the sidebar menu
closeIcon.addEventListener("click", hideSlider);

// Function to show the sidebar
function showSidebar() {
  secondNavbar.classList.add("show");
  layout.classList.add("show");
}

// Function to hide the sidebar
function hideSlider() {
  secondNavbar.classList.remove("show");
  layout.classList.remove("show");
}

// Function to toggle classes for the second dropdown
function showSecondList(index) {
  secondArrowDown[index].classList.toggle("hiding");
  secondArrowUp[index].classList.toggle("show");
  secondDropdownContainer[index].classList.toggle("show");
}

// Event listener for each list item in the second dropdown
lis.forEach((li) => {
  li.addEventListener("click", hideTheNavbar);
});

// Function to hide the sidebar when a list item is clicked
function hideTheNavbar() {
  hideSlider();
}
