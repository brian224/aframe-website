var newsEntities = Array.prototype.slice.call(document.querySelectorAll('#news-entities a-entity'));
newsEntities.forEach((entity, i) => {
  console.log(entity, i);
  entity.object3D.rotation.x = Math.PI/30 * (1 - i);
});
