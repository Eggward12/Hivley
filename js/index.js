$('.boton').click(function(){
    $(".popup").css("visibility","visible");
    
})
$(".logo").click(function(){
    $(".popup").css("visibility","hidden");
})

$(".boton1").click(function(){
    if(typeof($(".nombre")).val()!=='string'){
        alert()
    }
    // console.log(typeof($(".nombre").val()));
})


function validar(nombre) {    
    let input = document.getElementById(nombre);
    if(!input.checkValidity()) {
      alert('Solo debe ingresar letras en la sección de nombre');
    }
  }



