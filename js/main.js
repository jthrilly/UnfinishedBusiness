/*jshint unused:false */
/* global console, Swiper, alert */
/* export app */

var app = {
    // Application Constructor
    init: function() {
        this.bindEvents();

        // Swiper
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            speed:600
        });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // document.addEventListener('offline', this.onDeviceOffline, false);
        // document.addEventListener('online', this.onDeviceOnline, false);
        document.addEventListener("pause", function() {
            console.log('pausing');
            var vid = document.getElementById("myVideo");
            vid.pause();
        });
        document.addEventListener("resume", function() {
            setTimeout(function(){
                console.log('back');
                var vid = document.getElementById("myVideo");
                vid.play();
            }, 100);
        });

    },
    onDeviceReady: function() {
        console.log('device ready.');

    }
};
