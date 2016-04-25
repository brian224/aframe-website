var newsEntities = Array.prototype.slice.call(document.querySelectorAll('.news-entity-container'));
newsEntities.forEach((entity, i) => {
  console.log(entity, i);
  entity.object3D.rotation.x = Math.PI/12 * (1 - i);
});
