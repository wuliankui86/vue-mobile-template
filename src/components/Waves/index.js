import './waves.scss'

function waveListener(event) {
  var rect = this.getBoundingClientRect();
  var diameter = Math.max(rect.width, rect.height);
  var span = this.querySelector('.wave');
  if (!span) {
    span = document.createElement('span');
    span.className = 'wave';
    span.style.height = diameter + 'px';
    span.style.width = diameter + 'px';
    this.appendChild(span);
  }
  span.classList.add('anim');
  span.style.left = event.clientX - rect.left - diameter / 2 + 'px';
  span.style.top = event.clientY - rect.top - diameter / 2 + 'px';
  // span.classList.add('anim');
  setTimeout(function() {
    span.classList.remove('anim');
  }, 500);
}
export default {
  install(Vue, options) {
    Vue.directive('wave', {
      bind(el, binding) {
        el.classList.add('btn-wave')
        el.addEventListener('click', waveListener);
      },
      unbind(el) {
        el.removeEventListener('click', waveListener)
      }

    })
  }
}
