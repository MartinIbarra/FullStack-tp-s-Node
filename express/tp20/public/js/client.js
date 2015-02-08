"use strict";
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

navigator.getUserMedia({
    audio: true,
    video: true
}, function(vid) {
    document.querySelector('video').src = window.URL.createObjectURL(vid);
}, function(err) {
    console.log(err);
});

var socket = io();
$('form').submit(function() {
    socket.emit('chatMessage', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chatMessage', function(msg) {
    $('#messages').append($('<li>').text(msg));
});