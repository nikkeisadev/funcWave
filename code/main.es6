//Code made by nikkeisadev
function toggleAbout(id) {
  var div = document.getElementById(id);
  div.classList.toggle('hidden');
}

    function toggleFunctions(id) {
        var div = document.getElementById(id);
        div.classList.toggle('hidden');
    }

        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
        }