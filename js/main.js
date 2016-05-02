// var newsEntities = Array.prototype.slice.call(document.querySelectorAll('.news-entity-container'));
// newsEntities.forEach((entity, i) => {
//   console.log(entity, i);
//   entity.object3D.rotation.x = Math.PI/12 * (1 - i);
// });

AFRAME.registerComponent('toggle-detail', {
  schema: {
    target: { default: null }
  },

  init: function () {
    // console.log(this.el, this.data);
    this.targetElement = document.querySelector(this.data.target);
    var el = this.el;
    console.log(el);
    el.addEventListener('click', () => {
      console.log(this.targetElement);
      this.targetElement.classList.toggle('detail');
    });
  }
});

