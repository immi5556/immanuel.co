'use strict';
/* global snabbt, Hammer, window, document */

var chemicalElements = [
    { link: 'https://bubble.immanuel.co/', symbol: 'ferris-theme/images/buble_.webp', name: 'Bubble Chat', group: 1, period: 1 },
    { link: 'https://d3.immanuel.co/first.html', symbol: 'ferris-theme/images/d3js_.png', name: 'd3 js', group: 2, period: 1 },
    { link: 'https://feedback.immanuel.co/', symbol: 'ferris-theme/images/yt_feed.png', name: 'Feedback', group: 3, period: 1 },
    { link: 'https://photos.immanuel.co/', symbol: 'ferris-theme/images/a7_.png', name: 'A7 Gallery', group: 4, period: 2 },
    { link: 'https://geoip.immanuel.co/', symbol: 'ferris-theme/images/geoip_.png', name: 'Geoip', group: 5, period: 2 },
    { link: 'https://gospel.immanuel.co/', symbol: 'ferris-theme/images/gospel_.png', name: 'Gospel', group: 6, period: 2 },
    { link: 'https://ark-cities.immanuel.co/', symbol: 'ferris-theme/images/ark_cities_api_logo.png', name: 'Cities API', group: 7, period: 3 },
    { link: 'https://hi5.immanuel.co/Common/ScriptView', symbol: 'ferris-theme/images/hi5_.png', name: 'hi5 js', group: 8, period: 3 },
    { link: 'https://pdf.immanuel.co/Home/pdf', symbol: 'ferris-theme/images/htm_pdf.png', name: 'Html2Pdf', group: 9, period: 3 },
    { link: 'https://physics-2d-js.immanuel.co/matter10.html', symbol: 'ferris-theme/images/matter_.png', name: 'Matter Js', group: 9, period: 4 },
    { link: 'https://socket.immanuel.co/', symbol: 'ferris-theme/images/socket_.png', name: 'Socket', group: 8, period: 4 },
    { link: 'https://xsfood.org/', symbol: 'ferris-theme/images/xsfood_.png', name: 'Xs Food', group: 7, period: 4 },
    { link: 'https://spch.immanuel.co/', symbol: 'ferris-theme/images/voi_hlp.png', name: 'Speech IDE', group: 9, period: 5 },
    { link: 'https://video-converter.immanuel.co/', symbol: 'ferris-theme/images/vid_cvrt.png', name: 'Video', group: 10, period: 5 },
    { link: 'https://ydl.immanuel.co/', symbol: 'ferris-theme/images/ydl_.png', name: 'Youtube', group: 11, period: 4 },
    { link: 'https://vulgarity-validator.immanuel.co/', symbol: 'ferris-theme/images/vulgr_.png', name: 'Vulgar', group: 12, period: 6 },
    { link: 'https://webrtc-signal-node.immanuel.co/', symbol: 'ferris-theme/images/webrtc_.png', name: 'Webrtc Video Chat', group: 7, period: 6 },
    { link: 'https://aumfish.immanuel.co/', symbol: 'ferris-theme/images/logo_aum1.png', name: 'react js', group: 11, period: 5 },
    { link: 'https://immanuel.co/debs_game.html', symbol: 'data/ark/ARK_music.png', name: "Deb's Game", group: 13, period: 4 },
    //{ link: 'https://aumfish.immanuel.co/', symbol: 'ferris-theme/images/logo_aum1.png', name: 'react js', group: 14, period: 4 },
    //{ link: 'https://feedback.immanuel.co/', symbol: 'ferris-theme/images/yt_feed.png', name: 'Feedback', group: 15, period: 4 },
    //{ link: 'https://photos.immanuel.co/', symbol: 'ferris-theme/images/a7_.png', name: 'A7 Gallery', group: 16, period: 4 },
    //{ link: 'https://xsfood.org/webrtc/index.html', symbol: 'ferris-theme/images/webrtc_.png', name: 'Screen Share', group: 13, period: 4 },
    { link: 'https://ark-oidc-server.immanuel.co/', symbol: 'ferris-theme/images/ark_logo_1.png', name: 'Ark oAuth', group: 2, period: 4 },
    { link: 'https://webrtc-signal-node.immanuel.co/', symbol: 'ferris-theme/images/video_c.png', name: 'WebRTC Video', group: 3, period: 4 },
    { link: 'https://webrtc-audio-node.immanuel.co/', symbol: 'ferris-theme/images/audio_t.png', name: 'WebRTC Audio', group: 4, period: 4 },
    //{ link: 'https://geoip.immanuel.co/', symbol: 'ferris-theme/images/geoip_.png', name: 'Geoip', group: 17, period: 4 },
    //{ link: 'https://gospel.immanuel.co/', symbol: 'ferris-theme/images/gospel_.png', name: 'Gospel', group: 18, period: 4 },
    //{ link: 'https://hi5.immanuel.co/Common/ScriptView', symbol: 'ferris-theme/images/hi5_.png', name: 'hi5 js', group: 1, period: 5 },
    //{ link: 'https://pdf.immanuel.co/Home/pdf', symbol: 'ferris-theme/images/htm_pdf.png', name: 'Html2Pdf', group: 2, period: 5 },
    //{ link: 'https://physics-2d-js.immanuel.co/matter10.html', symbol: 'ferris-theme/images/matter_.png', name: 'Matter Js', group: 3, period: 5 },
    //{ link: 'https://socket.immanuel.co/', symbol: 'ferris-theme/images/socket_.png', name: 'Socket', group: 4, period: 5 },
    //{ link: 'https://xsfood.org/', symbol: 'ferris-theme/images/xsfood_.png', name: 'Xs Food', group: 5, period: 5 },
    //{ link: 'https://spch.immanuel.co/', symbol: 'ferris-theme/images/voi_hlp.png', name: 'Speech IDE', group: 6, period: 5 },
    //{ link: 'https://video-converter.immanuel.co/', symbol: 'ferris-theme/images/vid_cvrt.png', name: 'Video', group: 7, period: 5 },
    //{ link: 'https://ydl.immanuel.co/', symbol: 'ferris-theme/images/ydl_.png', name: 'Youtube', group: 8, period: 5 },
    //{ link: 'https://vulgarity-validator.immanuel.co/', symbol: 'ferris-theme/images/vulgr_.png', name: 'Vulgar', group: 9, period: 5 },
    //{ link: 'https://feedback.immanuel.co/', symbol: 'ferris-theme/images/yt_feed.png', name: 'Feedback', group: 12, period: 5 },
    //{ link: 'https://photos.immanuel.co/', symbol: 'ferris-theme/images/a7_.png', name: 'A7 Gallery', group: 13, period: 5 },
    //{ link: 'https://geoip.immanuel.co/', symbol: 'ferris-theme/images/geoip_.png', name: 'Geoip', group: 14, period: 5 },
    //{ link: 'https://gospel.immanuel.co/', symbol: 'ferris-theme/images/gospel_.png', name: 'Gospel', group: 15, period: 5 },
    //{ link: 'https://hi5.immanuel.co/Common/ScriptView', symbol: 'ferris-theme/images/hi5_.png', name: 'hi5 js', group: 16, period: 5 },
    //{ link: 'https://pdf.immanuel.co/Home/pdf', symbol: 'ferris-theme/images/htm_pdf.png', name: 'Html2Pdf', group: 17, period: 5 },
    //{ link: 'https://physics-2d-js.immanuel.co/matter10.html', symbol: 'ferris-theme/images/matter_.png', name: 'Matter Js', group: 18, period: 5 },
    //{ link: 'https://socket.immanuel.co/', symbol: 'ferris-theme/images/socket_.png', name: 'Socket', group: 1, period: 6 },
    //{ link: 'https://xsfood.org/', symbol: 'ferris-theme/images/xsfood_.png', name: 'Xs Food', group: 2, period: 6 },
    //{ link: 'https://spch.immanuel.co/', symbol: 'ferris-theme/images/voi_hlp.png', name: 'Speech IDE', group: 3, period: 9 },
    //{ link: 'https://video-converter.immanuel.co/', symbol: 'ferris-theme/images/vid_cvrt.png', name: 'Video', group: 4, period: 9 },
    //{ link: 'https://ydl.immanuel.co/', symbol: 'ferris-theme/images/ydl_.png', name: 'Youtube', group: 5, period: 9 },
    //{ link: 'https://vulgarity-validator.immanuel.co/', symbol: 'ferris-theme/images/vulgr_.png', name: 'Vulgar', group: 6, period: 9 },
    //{ link: 'https://xsfood.org/webrtc/index.html', symbol: 'ferris-theme/images/webrtc_.png', name: 'Screen Share', group: 7, period: 9 },
    //{ link: 'https://aumfish.immanuel.co/', symbol: 'ferris-theme/images/logo_aum1.png', name: 'react js', group: 8, period: 9 },
    //{ link: 'https://feedback.immanuel.co/', symbol: 'ferris-theme/images/yt_feed.png', name: 'Feedback', group: 9, period: 9 },
    //{ link: 'https://photos.immanuel.co/', symbol: 'ferris-theme/images/a7_.png', name: 'A7 Gallery', group: 10, period: 9 },
    //{ link: 'https://geoip.immanuel.co/', symbol: 'ferris-theme/images/geoip_.png', name: 'Geoip', group: 11, period: 9 },
    //{ link: 'https://gospel.immanuel.co/', symbol: 'ferris-theme/images/gospel_.png', name: 'Gospel', group: 12, period: 9 },
    //{ link: 'https://hi5.immanuel.co/Common/ScriptView', symbol: 'ferris-theme/images/hi5_.png', name: 'hi5 js', group: 13, period: 9 },
    //{ link: 'https://pdf.immanuel.co/Home/pdf', symbol: 'ferris-theme/images/htm_pdf.png', name: 'Html2Pdf', group: 14, period: 9 },
    //{ link: 'https://physics-2d-js.immanuel.co/matter10.html', symbol: 'ferris-theme/images/matter_.png', name: 'Matter Js', group: 15, period: 9 },
    //{ link: 'https://socket.immanuel.co/', symbol: 'ferris-theme/images/socket_.png', name: 'Socket', group: 16, period: 9 },
    //{ link: 'https://xsfood.org/', symbol: 'ferris-theme/images/xsfood_.png', name: 'Xs Food', group: 17, period: 9 },
    //{ link: 'https://spch.immanuel.co/', symbol: 'ferris-theme/images/voi_hlp.png', name: 'Speech IDE', group: 4, period: 6 },
    //{ link: 'https://video-converter.immanuel.co/', symbol: 'ferris-theme/images/vid_cvrt.png', name: 'Video', group: 5, period: 6 },
    //{ link: 'https://ydl.immanuel.co/', symbol: 'ferris-theme/images/ydl_.png', name: 'Youtube', group: 6, period: 6 },
    //{ link: 'https://vulgarity-validator.immanuel.co/', symbol: 'ferris-theme/images/vulgr_.png', name: 'Vulgar', group: 7, period: 6 },
    //{ link: 'https://xsfood.org/webrtc/index.html', symbol: 'ferris-theme/images/webrtc_.png', name: 'Screen Share', group: 8, period: 6 },
    //{ link: 'https://aumfish.immanuel.co/', symbol: 'ferris-theme/images/logo_aum1.png', name: 'react js', group: 9, period: 6 },
    //{ link: 'https://feedback.immanuel.co/', symbol: 'ferris-theme/images/yt_feed.png', name: 'Feedback', group: 10, period: 6 },
    //{ link: 'https://photos.immanuel.co/', symbol: 'ferris-theme/images/a7_.png', name: 'A7 Gallery', group: 11, period: 6 },
    //{ link: 'https://geoip.immanuel.co/', symbol: 'ferris-theme/images/geoip_.png', name: 'Geoip', group: 12, period: 6 },
    //{ link: 'https://gospel.immanuel.co/', symbol: 'ferris-theme/images/gospel_.png', name: 'Gospel', group: 13, period: 6 },
    //{ link: 'https://hi5.immanuel.co/Common/ScriptView', symbol: 'ferris-theme/images/hi5_.png', name: 'hi5 js', group: 14, period: 6 },
    //{ link: 'https://pdf.immanuel.co/Home/pdf', symbol: 'ferris-theme/images/htm_pdf.png', name: 'Html2Pdf', group: 15, period: 6 },
    //{ link: 'https://physics-2d-js.immanuel.co/matter10.html', symbol: 'ferris-theme/images/matter_.png', name: 'Matter Js', group: 16, period: 6 },
    //{ link: 'https://socket.immanuel.co/', symbol: 'ferris-theme/images/socket_.png', name: 'Socket', group: 17, period: 6 },
    //{ link: 'https://xsfood.org/', symbol: 'ferris-theme/images/xsfood_.png', name: 'Xs Food', group: 18, period: 6 },
    //{ link: 'https://spch.immanuel.co/', symbol: 'ferris-theme/images/voi_hlp.png', name: 'Speech IDE', group: 1, period: 7 },
    //{ link: 'https://video-converter.immanuel.co/', symbol: 'ferris-theme/images/vid_cvrt.png', name: 'Video', group: 2, period: 7 },
    //{ link: 'https://ydl.immanuel.co/', symbol: 'ferris-theme/images/ydl_.png', name: 'Youtube', group: 3, period: 10 },
    //{ link: 'https://vulgarity-validator.immanuel.co/', symbol: 'ferris-theme/images/vulgr_.png', name: 'Vulgar', group: 4, period: 10 },
    //{ link: 'https://xsfood.org/webrtc/index.html', symbol: 'ferris-theme/images/webrtc_.png', name: 'Screen Share', group: 5, period: 10 },
    //{ link: 'https://aumfish.immanuel.co/', symbol: 'ferris-theme/images/logo_aum1.png', name: 'react js', group: 6, period: 10 },
    //{ link: 'https://feedback.immanuel.co/', symbol: 'ferris-theme/images/yt_feed.png', name: 'Feedback', group: 7, period: 10 },
    //{ link: 'https://photos.immanuel.co/', symbol: 'ferris-theme/images/a7_.png', name: 'A7 Gallery', group: 8, period: 10 },
    //{ link: 'https://geoip.immanuel.co/', symbol: 'ferris-theme/images/geoip_.png', name: 'Geoip', group: 9, period: 10 },
    //{ link: 'https://gospel.immanuel.co/', symbol: 'ferris-theme/images/gospel_.png', name: 'Gospel', group: 10, period: 10 },
    //{ link: 'https://hi5.immanuel.co/Common/ScriptView', symbol: 'ferris-theme/images/hi5_.png', name: 'hi5 js', group: 11, period: 10 },
    //{ link: 'https://pdf.immanuel.co/Home/pdf', symbol: 'ferris-theme/images/htm_pdf.png', name: 'Html2Pdf', group: 12, period: 10 },
    //{ link: 'https://physics-2d-js.immanuel.co/matter10.html', symbol: 'ferris-theme/images/matter_.png', name: 'Matter Js', group: 13, period: 10 },
    //{ link: 'https://socket.immanuel.co/', symbol: 'ferris-theme/images/socket_.png', name: 'Socket', group: 14, period: 10 },
    //{ link: 'https://xsfood.org/', symbol: 'ferris-theme/images/xsfood_.png', name: 'Xs Food', group: 15, period: 10 },
    //{ link: 'https://spch.immanuel.co/', symbol: 'ferris-theme/images/voi_hlp.png', name: 'Speech IDE', group: 16, period: 10 },
    //{ link: 'https://video-converter.immanuel.co/', symbol: 'ferris-theme/images/vid_cvrt.png', name: 'Video', group: 17, period: 10 },
    //{ link: 'https://ydl.immanuel.co/', symbol: 'ferris-theme/images/ydl_.png', name: 'Youtube', group: 4, period: 7 },
    //{ link: 'https://vulgarity-validator.immanuel.co/', symbol: 'ferris-theme/images/vulgr_.png', name: 'Vulgar', group: 5, period: 7 },
    //{ link: 'https://xsfood.org/webrtc/index.html', symbol: 'ferris-theme/images/webrtc_.png', name: 'Screen Share', group: 6, period: 7 },
    //{ link: 'https://aumfish.immanuel.co/', symbol: 'ferris-theme/images/logo_aum1.png', name: 'react js', group: 7, period: 7 },
    //{ link: 'https://feedback.immanuel.co/', symbol: 'ferris-theme/images/yt_feed.png', name: 'Feedback', group: 8, period: 7 },
    //{ link: 'https://photos.immanuel.co/', symbol: 'ferris-theme/images/a7_.png', name: 'A7 Gallery', group: 9, period: 7 },
    //{ link: 'https://geoip.immanuel.co/', symbol: 'ferris-theme/images/geoip_.png', name: 'Geoip', group: 10, period: 7 },
    //{ link: 'https://gospel.immanuel.co/', symbol: 'ferris-theme/images/gospel_.png', name: 'Gospel', group: 11, period: 7 },
    //{ link: 'https://hi5.immanuel.co/Common/ScriptView', symbol: 'ferris-theme/images/hi5_.png', name: 'hi5 js', group: 12, period: 7 },
    //{ link: 'https://pdf.immanuel.co/Home/pdf', symbol: 'ferris-theme/images/htm_pdf.png', name: 'Html2Pdf', group: 13, period: 7 },
    //{ link: 'https://physics-2d-js.immanuel.co/matter10.html', symbol: 'ferris-theme/images/matter_.png', name: 'Matter Js', group: 14, period: 7 },
    //{ link: 'https://socket.immanuel.co/', symbol: 'ferris-theme/images/socket_.png', name: 'Socket', group: 15, period: 7 },
    //{ link: 'https://xsfood.org/', symbol: 'ferris-theme/images/xsfood_.png', name: 'Xs Food', group: 16, period: 7 },
    //{ link: 'https://xsfood.org/audio/set_1/spch_html.html', symbol: 'ferris-theme/images/voi_hlp.png', name: 'Speech IDE', group: 17, period: 7 },
    //{ link: 'https://video-converter.immanuel.co/', symbol: 'ferris-theme/images/vid_cvrt.png', name: 'Video', group: 18, period: 7 },
    //{ link: 'https://ydl.immanuel.co/', symbol: 'ferris-theme/images/ydl_.png', name: 'Youtube', group: 14, period: 7 },
    //{ link: 'https://vulgarity-validator.immanuel.co/', symbol: 'ferris-theme/images/vulgr_.png', name: 'Vulgar', group: 4, period: 7 }
];

chemicalElements.sort(function (a, b) {
    if (a.period === b.period)
        return a.group - b.group;
    return a.period - b.period;
});

var domElements = [];
var springConstant = 0.3;
var springDeceleration = 0.7;

function elementDelay(i) {
    return i * 10;
}


function divWithClass(cls) {
    var element = document.createElement('div');
    element.classList.add(cls);
    return element;
}

function imgEle(ele) {
    var element = document.createElement('img');
    element.src = ele.symbol;
    element.setAttribute("width", "50%");
    element.setAttribute("height", "50%");
    element.style.marginTop = "3px";
    //aele.appendChild(element);
    return element;
}

function createElements() {
    var root = document.querySelector('.root');
    chemicalElements.forEach(function (chemElement) {
        var aele = document.createElement('a');
        aele.setAttribute("href", chemElement.link);
        aele.setAttribute("target", "_blank");

        var element = divWithClass('element');
        var symbol = divWithClass('element__symbol');
        var name = divWithClass('element__name');
        //symbol.textContent = chemElement.symbol;
        symbol.appendChild(imgEle(chemElement));

        name.textContent = chemElement.name;
        element.appendChild(symbol);
        element.appendChild(name);
        aele.appendChild(element);
        root.appendChild(aele);
        //root.appendChild(element);
        domElements.push(element);
    });
}

function tableFormation() {
    var columns = 17;
    var rows = 10;
    var spacing = 60;
    var baseXOffset = -Math.floor(columns / 2) * spacing;
    var baseYOffset = -Math.floor(rows / 2) * spacing;
    snabbt(domElements, {
        rotation: [0, 0, 0],
        position: function (i) {
            var e = chemicalElements[i];
            return [baseXOffset + (e.group - 1) * spacing, baseYOffset + e.period * spacing, 0];
        },
        easing: 'spring',
        springConstant: springConstant,
        springDeceleration: springDeceleration,
        delay: elementDelay
    });
}

function gridFormation() {
    var spacing = 120;
    var layerSpacing = 120;
    var cols = 5;
    var elementsPerLayer = 5 * 5;
    var baseXOffset = -Math.floor(cols / 2) * spacing;
    var baseYOffset = -Math.floor(cols / 2) * spacing;
    var layerOffset = Math.floor(5 / 2) * layerSpacing;
    snabbt(domElements, {
        rotation: [0, 0, 0],
        position: function (i) {
            var layerIndex = Math.floor(i / elementsPerLayer);
            var indexWithinLayer = i - layerIndex * elementsPerLayer;
            var row = Math.floor(indexWithinLayer / cols);
            var col = indexWithinLayer % cols;
            return [baseXOffset + col * spacing, baseYOffset + row * spacing, layerOffset - layerIndex * layerSpacing];
        },
        easing: 'spring',
        springConstant: springConstant,
        springDeceleration: springDeceleration,
        delay: elementDelay
    });
}

function spiralFormation() {
    var rots = 5;
    var yStep = 3;
    var baseYOffset = domElements.length / 2 * yStep;

    snabbt(domElements, {
        position: function (i, len) {
            var x = Math.sin(rots * 2 * Math.PI * i / len);
            var z = Math.cos(rots * 2 * Math.PI * i / len);
            var radius = 300;
            return [radius * x, -baseYOffset + i * yStep, radius * z];
        },
        rotation: function (i, len) {
            var rotation = -(i / len) * rots * Math.PI * 2;
            while (rotation < -2 * Math.PI)
                rotation += 2 * Math.PI;
            return [0, rotation, 0];
        },
        easing: 'spring',
        springConstant: springConstant,
        springDeceleration: springDeceleration,
        delay: elementDelay
    });
}

function setupCameraControls(container, root) {
    var translateZ = 0;
    var rotateX = 0;
    var rotateY = 0;
    var rotateXOffset = 0;
    var rotateYOffset = 0;
    var rotateXVelocity = 0;
    var rotateYVelocity = 0;
    var staticTranslateZ = window.innerWidth < 480 ? 800 : 0;

    root.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    root.style.webkitTransform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    function updateCamera(rotX, rotY, transZ) {
        var transformString = 'perspective(1000px) translateZ(' + (transZ - staticTranslateZ) + 'px) rotateY(' + rotX + 'deg) rotateX(' + -rotY + 'deg)';
        root.style.transform = transformString;
        root.style.webkitTransform = transformString;
    }

    function stepCamera() {
        rotateX += rotateXVelocity;
        rotateY += rotateYVelocity;
        var rotX = rotateX + rotateXOffset;
        var rotY = rotateY + rotateYOffset;

        rotateXVelocity *= 0.99;
        rotateYVelocity *= 0.99;

        updateCamera(rotX, rotY, translateZ);

        window.requestAnimationFrame(stepCamera);
    }
    window.requestAnimationFrame(stepCamera);

    var hammertime = new Hammer(container, { direction: Hammer.DIRECTION_ALL });
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.get('pinch').set({ enable: true });


    hammertime.on('pan', function (ev) {

        rotateXOffset = ev.deltaX / 10;
        rotateYOffset = ev.deltaY / 10;
        rotateXVelocity = 0;
        rotateYVelocity = 0;
        if (ev.isFinal) {
            rotateX += rotateXOffset;
            rotateY += rotateYOffset;
            rotateXVelocity = -ev.velocityX;
            rotateYVelocity = -ev.velocityY;
            rotateXOffset = 0;
            rotateYOffset = 0;
        }
    });
    container.addEventListener('mousewheel', function (ev) {
        translateZ += ev.deltaY;
        translateZ = Math.min(Math.max(0, translateZ), 600);
    });
}

function initEventListeners() {
    var root = document.querySelector('.root');
    var container = document.querySelector('.container');
    var tableButton = document.getElementById('table');
    var gridButton = document.getElementById('grid');
    var spiralButton = document.getElementById('spiral');

    tableButton.addEventListener('click', function () {
        tableFormation();
        tableButton.classList.add('button-primary');
        gridButton.classList.remove('button-primary');
        spiralButton.classList.remove('button-primary');
    });
    gridButton.addEventListener('click', function () {
        gridFormation();
        tableButton.classList.remove('button-primary');
        gridButton.classList.add('button-primary');
        spiralButton.classList.remove('button-primary');
    });
    spiralButton.addEventListener('click', function () {
        spiralFormation();
        tableButton.classList.remove('button-primary');
        gridButton.classList.remove('button-primary');
        spiralButton.classList.add('button-primary');
    });

    setupCameraControls(container, root);
}

function initPositions() {
    var distance = 400;
    snabbt(domElements, {
        fromPosition: function () {
            return [
                distance - 2 * distance * Math.random(),
                distance - 2 * distance * Math.random(),
                distance - 2 * distance * Math.random()
            ];
        },
        position: function () {
            return [
                distance - 2 * distance * Math.random(),
                distance - 2 * distance * Math.random(),
                distance - 2 * distance * Math.random()
            ];
        },
        fromOpacity: 0,
        opacity: 1,
        duration: 1000,
        easing: 'ease',
        allDone: function () {
            tableFormation();
        }
    });
}

createElements();
initPositions();
initEventListeners();
