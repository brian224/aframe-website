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

<<<<<<< HEAD
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
=======
    var el = this.el;

    el.addEventListener('click', () => {
      console.log(this.targetElement);
>>>>>>> master
      this.targetElement.classList.toggle('detail');
    });
  }
});

<<<<<<< HEAD
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
=======
// window.addEventListener('load', () => {
//   console.log('load');
//   var rows = document.querySelectorAll('.row');
//   console.log(rows);
//   Array.prototype.forEach.call(rows, (row) => {
//     console.log(row);
//     row.addEventListener('loaded', () => {
//       console.log('row loaded');
//       row.emit('');
//     });
//   });

//   var row = document.querySelector('.row');
//   row.addEventListener('loaded', () => {
//     console.log('row loaded');
//   });
// });
>>>>>>> master
