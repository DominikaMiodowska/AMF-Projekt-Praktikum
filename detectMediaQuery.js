// Detect Media Query
$(document).ready(function () {
    $("body").append("<div style='display:none;' class='breakpoint-check'><span class='xs d-block d-sm-inline'></span><span class='sm d-sm-block d-md-inline'></span><span class='md d-md-block d-lg-inline'></span><span class='lg d-lg-block d-xl-inline'></span><span class='xl d-xl-block'></span></div>");
    detectMediaQuery();
    $(window).trigger('resize');
});
$(window).on('load', function () {
    detectMediaQuery();
});
$(window).resize(function (e) {
    detectMediaQuery();
});

// https://jacoblett.github.io/IfBreakpoint/
function checkIfBlock(s) {
    return "block" == $(s).css("display");
}

var xs, sm, md, lg, xl, breakpoint;

function detectMediaQuery() {
    xs = checkIfBlock(".breakpoint-check .xs");
    sm = checkIfBlock(".breakpoint-check .sm");
    md = checkIfBlock(".breakpoint-check .md");
    lg = checkIfBlock(".breakpoint-check .lg");
    xl = checkIfBlock(".breakpoint-check .xl");
    1 == xs && (breakpoint = "xs"), 1 == sm && (breakpoint = "sm"), 1 == md && (breakpoint = "md"), 1 == lg && (breakpoint = "lg"), 1 == xl && (breakpoint = "xl");
    $('body').data('mediaquery', breakpoint);
}
