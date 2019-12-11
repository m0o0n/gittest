close_mediaw.onclick = function()
          {
              var meidaw = document.getElementById("media_wrapper");
              meidaw.style.display = "none";
              var html = document.getElementById("html");
              html.style.overflowY = "scroll";
          }


wrapp_bars.onclick = function()
       {
           var mediaw = document.getElementById("media_wrapper");
           mediaw.style.display = "flex";
           window.scrollTo(0, 0);
           var html =  document.getElementById("html");
           html.style.overflowY = "hidden";
       }
ff_close.onclick = function()
               {
                   var fast_form = document.getElementById('fast_form');
                   fast_form.style.display = "none";
               }

serv_overf.onclick = function(){
    var html = document.getElementById("html");
    html.style.overflowY = "scroll";
    var media_wrapper = document.getElementById("media_wrapper");
    media_wrapper.style.display = "none";
}

function serv_kostil(){
    var html = document.getElementById("html");
    html.style.overflowY = "scroll";
    var media_wrapper = document.getElementById("media_wrapper");
    media_wrapper.style.display = "none";
}

op_fastf.onmouseover = function(){
    this.style.height = "75px";
    this.style.width = "75px";
}

op_fastf.onmouseout = function(){
    this.style.height = "70px";
    this.style.width = "70px";
}

op_fastf.onclick = function(){
    var fast_form = document.getElementById('fast_form');
    fast_form.style.display = "flex";
}



$(document).ready(function() {
   $(window).on("scroll", function(){
       if($("#op_fastf").offset().top > $(document).height() - 400){
           $("#op_fastf").css({opacity: 0.3});
       } else{
           $("#op_fastf").css({opacity: 1});
       }
                                    
                                    }); 
});



$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("We call back you later");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});

$(document).ready(function() {

	$("#form_es").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_es.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("We call back you later");
			$("#form_es").trigger("reset");
		});
		return false;
	});
	
});


