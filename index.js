var tablinks= document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");

}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}
function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('active'); 
}
close.addEventListener("click",closeSidebar)
document.addEventListener('click', (event) => {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.querySelector('.menu-icon');
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    closeSidebar();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeSidebar();
  }
});
