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
    this.targetElement = document.querySelector(this.data.target);

    if (!this.targetElement) {
      return;
    }

    this.el.addEventListener('mousedown', () => {
      this.clicked = true;
    });

    this.el.addEventListener('mouseleave', () => {
      this.clicked = false;
    });

    this.el.addEventListener('mouseup', () => {
      if (!this.clicked) {
        return;
      }

      this.clicked = false;
      this.targetElement.classList.toggle('detail');
    });
  }
});

AFRAME.registerComponent('go-to-url', {
  schema: {
    url: { default: null }
  },

  init: function () {
    var url = this.data.url;

    if (!url) {
      return;
    }

    this.el.addEventListener('mousedown', () => {
      this.clicked = true;
    });

    this.el.addEventListener('mouseleave', () => {
      this.clicked = false;
    });

    this.el.addEventListener('mouseup', () => {
      if (!this.clicked) {
        return;
      }

      this.clicked = false;

      var exitAnimation = document.getElementById('exit-animation');
      exitAnimation.removeEventListener('animationend', this.animationendHandler);
      this.animationendHandler = exitAnimation.addEventListener('animationend', () => {
        window.location.href = url;
      });

      var rows = document.querySelectorAll('.row');
      Array.prototype.forEach.call(rows, (row) => {
        row.emit('exit');
      });
    });
  }
});
