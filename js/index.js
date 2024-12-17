var mapasRemovidos = 0;
const mapas = ["ABYSS", "ASCENT", "BIND", "BREEZE", "FRACTURE", "HAVEN", "ICEBOX", "LOTUS", "PEARL", "SPLIT", "SUNSET"];

$(".maps .list li").on("click", function() {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        mapasRemovidos--;
        checkMaps();
        return;
    }

    if(mapasRemovidos < 2) {
        $(this).toggleClass("active");
        mapasRemovidos++;
        checkMaps();
        return;
    }
});

function checkMaps() {
    $("#mapas-removidos").html(`${mapasRemovidos}/2`);

    if(mapasRemovidos == 2)
        $("#btn-sortear").prop("disabled", false);
    else
        $("#btn-sortear").prop("disabled", true);
}

function sortear() {
    let maps = $(".maps .list li:not(.active)");
    let indexMaps = [];

    for(i=0; i<maps.length; i++){
        indexMaps.push($(maps[i]).data("index"));
    }

    let mapa = indexMaps[Math.floor(Math.random() * indexMaps.length)];
    openModal(mapa);

}

function openModal(mapa) {
    $("#result").addClass("open");

    setTimeout(() => {
      $(".modal #data").addClass("active");
      $(".loader").removeClass("active");
      $("#img-mapa").css("background-image", `url('./img/maps/${mapa}.jpg')`);
      $("#nome-mapa").html(mapas[mapa - 1]);
    }, "2000");
}

$(".close").on("click", function() {
  $("#result").removeClass("open");
  $(".modal #data").removeClass("active");
  $(".loader").addClass("active");
  $("#img-mapa").css("background-image", 'none');
  $("#nome-mapa").html("");
});

// window.onclick = function(event) {
//   var modal = document.getSelection("result");
//   if (event.target == modal) {
//     $("#result").removeClass("open");
//   }
// }