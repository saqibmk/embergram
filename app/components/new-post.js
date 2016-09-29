import Ember from 'ember';
const {get} = Ember;

var _stream;

function handleVideo(stream) {
  var video = document.querySelector("#videoElement");
  console.log(video.clientHeight, video.clientWidth);
  // video.addEventListener('click', snapshot(stream, video), false);
  video.src = window.URL.createObjectURL(stream);
  _stream = stream;

}


function snapshot() {
  var canvas = document.querySelector('#canvasCapture');
  var video = document.querySelector("#videoElement");
  canvas.getContext('2d').drawImage(video, 0, 0, video.clientHeight, video.clientWidth);
}

function videoError() {
  console.log('Error');
}

export default Ember.Component.extend({
  didInsertElement: ()=> {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true},handleVideo, videoError);
    }
  },
  actions: {
    capture(){
      snapshot();
    },
    save(){
      let postTitle = get(this, 'postTitle');
      this.sendAction('store', postTitle);
    }
  },
  willDestroyElement: function () {
    //var video = document.querySelector("#videoElement");
    //video.src = null;
    _stream.getTracks()[0].stop();
}
});

// let const handleVideo = func
