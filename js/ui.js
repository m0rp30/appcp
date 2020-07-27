document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.side-menu');
    var instance = M.Sidenav.init(elems, {edge: 'right'});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {direction: top});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {opacity: 0.6});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {autoClose: true, format: 'dd-mm-yyyy'});
});