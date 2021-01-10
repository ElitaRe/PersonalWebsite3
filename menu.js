 if(window.innerWidth <= 947) {
        document.getElementById('menu').classList.remove('open');
        document.getElementById('menu').classList.add('close');
}
function showMenu() {
        var menu = document.getElementById('menu');
        if(menu.classList.contains('open')) {
          menu.classList.remove('open');
          menu.classList.add('close');
        }
        else {
          menu.classList.remove('close');
          menu.classList.add('open');
        }
      }