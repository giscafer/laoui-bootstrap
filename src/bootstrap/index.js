'use strict'

var accordion = require("./accordion");
var buttons = require("./buttons");
var carousel = require("./carousel");
var collapse = require("./collapse");
var dateparser = require("./dateparser");
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
var tooltip = require("./tooltip");
var typeahead = require("./typeahead");


const MODULE_NAME = "ui.bootstrap";

angular.module(MODULE_NAME, [accordion,
    buttons,
    carousel,
    collapse,
    dateparser,
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
    tooltip,
    typeahead
]);

export default MODULE_NAME;
