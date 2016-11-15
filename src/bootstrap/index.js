'use strict'

var accordion = require("./accordion");
var alert = require("./alert");
var buttons = require("./buttons");
var carousel = require("./carousel");
var collapse = require("./collapse");
var dateparser = require("./dateparser");
var datepicker = require("./datepicker");
var datepickerPopup = require("./datepickerPopup");
var debounce = require("./debounce");
var dropdown = require("./dropdown");
var isClass = require("./isClass");
var modal = require("./modal");
var pager = require("./pager");
var pagination = require("./pagination");
var paging = require("./paging");
var popover = require("./popover");
var position = require("./position");
var progressbar = require("./progressbar");
var rating = require("./rating");
var stackedMap = require("./stackedMap");
var tabindex = require("./tabindex");
var tabs = require("./tabs");
var timepicker = require("./timepicker");
var tooltip = require("./tooltip");
var typeahead = require("./typeahead");


const MODULE_NAME = "ui.bootstrap";

angular.module(MODULE_NAME, [accordion,
    alert,
    buttons,
    carousel,
    collapse,
    dateparser,
    datepicker,
    datepickerPopup,
    debounce,
    dropdown,
    isClass,
    modal,
    pager,
    pagination,
    paging,
    popover,
    position,
    progressbar,
    rating,
    stackedMap,
    tabindex,
    tabs,
    timepicker,
    tooltip,
    typeahead
]);

export default MODULE_NAME;
