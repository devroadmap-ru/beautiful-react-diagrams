/* beautiful-react-diagrams version: 0.5.1 */
import getRelativePoint from '../../shared/functions/getRelativePoint.js';

var getEntityCoordinates = function getEntityCoordinates(entity, portRefs, nodeRefs, canvas) {
  if (entity && entity.type === 'node' && nodeRefs[entity.entity.id]) {
    var nodeEl = nodeRefs[entity.entity.id];
    var bbox = nodeEl.getBoundingClientRect();
    return [entity.entity.coordinates[0] + bbox.width / 2, entity.entity.coordinates[1] + bbox.height / 2];
  }
  if (portRefs && portRefs[entity.entity.id]) {
    var portEl = portRefs[entity.entity.id];
    var _bbox = portEl.getBoundingClientRect();
    return getRelativePoint([_bbox.x + _bbox.width / 2, _bbox.y + _bbox.height / 2], [canvas.x, canvas.y]);
  }
  return undefined;
};

export { getEntityCoordinates as default };
