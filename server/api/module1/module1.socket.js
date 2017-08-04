/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cloud = require('./cloud.model');

exports.register = function(socket) {
    Cloud.schema.post('save', function(doc) {
        onSave(socket, doc);
    });
    Cloud.schema.post('remove', function(doc) {
        onRemove(socket, doc);
    });
};

function onSave(socket, doc, cb) {
    socket.emit('Cloud:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('Cloud:remove', doc);
}
