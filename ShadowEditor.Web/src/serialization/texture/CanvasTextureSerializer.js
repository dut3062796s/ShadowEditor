import BaseSerializer from '../BaseSerializer';
import TextureSerializer from './TextureSerializer';

/**
 * CanvasTextureSerializer
 */
function CanvasTextureSerializer() {
    BaseSerializer.call(this);
}

CanvasTextureSerializer.prototype = Object.create(BaseSerializer.prototype);
CanvasTextureSerializer.prototype.constructor = CanvasTextureSerializer;

CanvasTextureSerializer.prototype.toJSON = function (obj) {
    return TextureSerializer.prototype.toJSON.call(this, obj);
};

CanvasTextureSerializer.prototype.fromJSON = function (json, parent) {
    var obj = parent === undefined ? new THREE.CanvasTexture() : parent;

    TextureSerializer.prototype.fromJSON.call(this, json, obj);

    return obj;
};

export default CanvasTextureSerializer;