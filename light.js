const lights = document.querySelectorAll('.light');

function activateLight(color) {
  lights.forEach(light => light.classList.remove('active'));
  document.querySelector(`.light.${color}`).classList.add('active');
}