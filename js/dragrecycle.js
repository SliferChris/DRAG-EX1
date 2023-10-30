$(document).ready(function () {
$('#photos img').draggable();({
revert: "invalid",
start: function (event, ui) {
    ui.helper.css('transform', 'rotate(5deg) scale(1.5)');
},
stop: function (event, ui) {
        ui.helper.css('transform', 'rotate(0deg) scale(1)');
},
zIndex: 100
});
$('#trashcan').droppable({
    activeClass: 'highlight',
    over: function () {
        $(this).attr('src', 'images/trashfull.jpg');
    },
    out: function () {
        $(this).attr('src', 'images/trashempty.jpg');
    },

    drop: function (event, ui) {
        ui.helper.hide('explode', {pieces: 16}, 500);
        $(this).attr('src', 'images/trashempty.jpg');
    },

});
}) //END READY 