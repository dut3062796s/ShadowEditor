import BaseSerializer from '../BaseSerializer';
import Object3DSerializer from './Object3DSerializer';

/**
 * Scene序列化器
 */
function SceneSerializer() {
    BaseSerializer.call(this);
}

SceneSerializer.prototype = Object.create(BaseSerializer.prototype);
SceneSerializer.prototype.constructor = SceneSerializer;

SceneSerializer.prototype.toJSON = function (obj) {
    var json = Object3DSerializer.prototype.toJSON(obj);

    json.background = item.background;
    json.fog = item.fog;
    json.overrideMaterial = item.overrideMaterial;

    return json;
};

SceneSerializer.prototype.fromJSON = function (json) {

};

export default SceneSerializer;