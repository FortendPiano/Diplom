window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabsWindow = require('./parts/tabswindows'),
        tabsFinish = require('./parts/tabsfinish'),
        sixForm = require('./parts/sixform'),
        sixteenSec = require('./parts/60sec'),
        calc = require('./parts/calc'),
        img = require('./parts/clickimg'),
        formModal = require('./parts/forminmodal'),
        popup = require('./parts/popup'),
        timer = require('./parts/timer'),
        structure = require('./parts/modalstructure'),
        windowCall = require('./parts/windowcall');

    tabsWindow();
    tabsFinish();
    sixForm();
    sixteenSec();
    calc();
    img();
    formModal();
    popup();
    timer();
    structure();
    windowCall();
    
});
