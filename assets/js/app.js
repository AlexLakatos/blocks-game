function init(){
var ICONS = ["check", "gear", "refresh", "grid", "star", "alert", "info", "home", "check", "gear", "refresh", "grid", "star", "alert", "info", "home"];
ICONS.sort(function() {return 0.5 - Math.random()});
$(".ui-grid-c span.ui-btn-inner").each(function (i) {$(this).append('<span class="ui-icon ui-icon-' + ICONS[i] + ' ui-icon-shadow">&nbsp;</span>')});
}