const d = document,
$btn = d.querySelector(".principal-btn");

function abrirVideo(video = undefined) {
  (video === undefined)
  ? alert("Por lo visto el video aún no se encuentra disponible o ha ocurrido algún error, trabajaremos para hacer el video o resolver el problema UwU")
  : location.href = video;
}

d.addEventListener("click", e =>  {
  if(e.target.matches(".principal-btn")){
    location.href = "libros.html";
  }
})