
(function ($) {
    "use strict";

    /*==================================================================
    [ Load page ]*/
    try {
        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading-1',
            loadingInner: '<div class="loader05"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'html',
            transition: function(url){ window.location.href = url; }
        });
    } catch(er) {console.log(er);}

    
    /*==================================================================
    [ Back to top ]*/
    try {
        var windowH = $(window).height()/2;

        $(window).on('scroll',function(){
            if ($(this).scrollTop() > windowH) {
                $("#myBtn").addClass('show-btn-back-to-top');
            } else {
                $("#myBtn").removeClass('show-btn-back-to-top');
            }
        });

        $('#myBtn').on("click", function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Fixed menu ]*/
    try {
        var posNav = $('.wrap-main-nav').offset().top;
        var menuDesktop = $('.container-menu-desktop');
        var mainNav = $('.main-nav');
        var lastScrollTop = 0;
        var st = 0;
        
        $(window).on('scroll',function(){
            fixedHeader();     
        });
        
        $(window).on('resize',function(){ 
            fixedHeader();
        });

        $(window).on('load',function(){ 
            fixedHeader();
        });

        var fixedHeader = function() {
            st = $(window).scrollTop();

            if(st > posNav + mainNav.outerHeight()) {
                $(menuDesktop).addClass('fix-menu-desktop');
            } 
            else if(st <= posNav) {
                $(menuDesktop).removeClass('fix-menu-desktop');
            }   

            if (st > lastScrollTop){
                $(mainNav).removeClass('show-main-nav');
            } 
            else {
                $(mainNav).addClass('show-main-nav');
            }

            lastScrollTop = st;
        };
            
    } catch(er) {console.log(er);}

    /*==================================================================
    [ Menu mobile ]*/
    try {
        $('.btn-show-menu-mobile').on('click', function(){
            $(this).toggleClass('is-active');
            $('.menu-mobile').slideToggle();
        });

        var arrowMainMenu = $('.arrow-main-menu-m');

        for(var i=0; i<arrowMainMenu.length; i++){
            $(arrowMainMenu[i]).on('click', function(){
                $(this).parent().find('.sub-menu-m').slideToggle();
                $(this).toggleClass('turn-arrow-main-menu-m');
            })
        }

        $(window).on('resize',function(){
            if($(window).width() >= 992){
                if($('.menu-mobile').css('display') === 'block') {
                    $('.menu-mobile').css('display','none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }

                $('.sub-menu-m').each(function(){
                    if($(this).css('display') === 'block') { 
                        $(this).css('display','none');
                        $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                    }
                });
                    
            }
        });
    } catch(er) {console.log(er);}


    /*==================================================================
    [ Respon tab01 ]*/
    try {
        $('.tab01').each(function(){
            var tab01 = $(this);
            var navTabs = $(this).find('.nav-tabs');
            var dropdownMenu = $(tab01).find('.nav-tabs>.nav-item-more .dropdown-menu');
            var navItem = $(tab01).find('.nav-tabs>.nav-item');

            var navItemSize = [];
            var size = 0;
            var wNavItemMore = 0;
            
            $(window).on('load', function(){
                navItem.each(function(){
                    size += $(this).width();
                    navItemSize.push(size);
                });

                responTab01();
            });
                
            $(window).on('resize', function(){
                responTab01();              
            })

            var responTab01 = function() {
                if(navTabs.width() <= navItemSize[navItemSize.length - 1] + 1) { 
                    $(tab01).find('.nav-tabs>.nav-item-more').removeClass('dis-none');
                }
                else {
                    $(tab01).find('.nav-tabs>.nav-item-more').addClass('dis-none');
                }

                wNavItemMore = $(tab01).find('.nav-tabs>.nav-item-more').hasClass('dis-none')? 0 : $(tab01).find('.nav-tabs>.nav-item-more').width();

                for(var i=0 ; i<navItemSize.length ; i++) {

                    if(navTabs.width() - wNavItemMore <= navItemSize[i] + 1) {
                        $(tab01).find('.nav-tabs .nav-item').remove();

                        for(var j=i-1 ; j >= 0 ; j--) {
                            $(navTabs).prepend($(navItem[j]).clone());
                        }

                        for(var j=i ; j < navItemSize.length ; j++) {
                            $(dropdownMenu).append($(navItem[j]).clone());
                        }

                        break;
                    }
                    else {
                        $(tab01).find('.nav-tabs .nav-item').remove();

                        for(var j=i ; j >= 0 ; j--) {
                            $(navTabs).prepend($(navItem[j]).clone());
                        }
                    }
                }
            };
        });
    } catch(er) {console.log(er);}
        

    /*==================================================================
    [ Play video 01 ]*/
    try {
        var srcOld = $('.video-mo-01').children('iframe').attr('src');

        $('[data-target="#modal-video-01"]').on('click',function(){
            $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

            setTimeout(function(){
                $('.video-mo-01').css('opacity','1');
            },300);      
        });

        $('[data-dismiss="modal"]').on('click',function(){
            $('.video-mo-01').children('iframe')[0].src = srcOld;
            $('.video-mo-01').css('opacity','0');
        });
    } catch(er) {console.log(er);}
   

    /*==================================================================
    [ Tab mega menu ]*/
    try {
        $(window).on('load', function(){
            $('.sub-mega-menu .nav-pills > a').hover(function() {
                $(this).tab('show');
            });
        });
    } catch(er) {console.log(er);}

    /*==================================================================
    [ Slide100 txt ]*/

    try {
        $('.slide100-txt').each(function(){
            var slideTxt = $(this);
            var itemSlideTxt = $(this).find('.slide100-txt-item'); 
            var data = [];
            var count = 0;
            var animIn = $(this).data('in');
            var animOut = $(this).data('out');

            for(var i=0; i<itemSlideTxt.length; i++) {
                data[i] = $(itemSlideTxt[i]).clone();
                $(data[i]).addClass('clone');
            }

            $(window).on('load', function(){
                $(slideTxt).find('.slide100-txt-item').remove();
                $(slideTxt).append($(data[0]).clone());
                $(slideTxt).find('.slide100-txt-item.clone').addClass(animIn + ' visible-true');
                count = 0;
            });
            
            setInterval(function(){
                $(slideTxt).find('.slide100-txt-item.ab-t-l.' + animOut).remove();
                $(slideTxt).find('.slide100-txt-item').addClass('ab-t-l ' + animOut);

                
                if(count >= data.length-1) {
                    count = 0;
                }
                else {
                    count++;
                }

                console.log($(data[count]).text());

                $(slideTxt).append($(data[count]).clone());
                $(slideTxt).find('.slide100-txt-item.clone').addClass(animIn + ' visible-true');
            },5000); 
        });
    } catch(er) {console.log(er);}
            
    
    /* !!!!!!!!!AJAX!!!!!!!!!!!! */
    
//    var tokenKey = "access_token";
//		$(document).ready(()=>{
//		$('#submitRegistration').click(()=>{
//			var logindata = {
//				grant_type: 'password',
//				login: $('#regemail').val(),
//				password: $('#regpassword').val()
//			};
//			$.ajax({
//				type:'POST',
//				url:'http://localhost:5000/api/Account/token',
//				data:logindata
//			}).success((data)=>{
//				sessionStorage.setItem(tokenKey, data.access_token)
//				alert(data.access_token);
//				console.log(data.access_token);
//			})
//		})
//		$('#submittoken').click(() => {
//			$.ajax({
//				type:'POST',
//				url:'http://localhost:5000/api/Account/testr',
//				beforeSend: function (xhr) {
//                    var token = sessionStorage.getItem(tokenKey);
//                    xhr.setRequestHeader("Authorization", "Bearer " + token);
//                },
//			}).success((data) =>{
//				alert(data);
//			})
//		})
//	});
    
    
    $(document).ready(()=>{

         $.ajax({
           type: 'GET',
             
           url: 'https://loft-art.com.ua/avpz/Controller/getcategories.php',
           
           success: function(data1){
//            sessionStorage.setItem('data', data[0].Name);
               var arr = data1.split('.');
               console.log(arr.length);
               var main_menu = $('#main-menu');
               for(var k = 0; k<7; k++){
                   
                   var li_inM = document.createElement('li');
                   li_inM.classList.add('mega-menu-item');
                   var a_inli = document.createElement('a');
                   main_menu.append(li_inM);
                   li_inM.append(a_inli);
                   a_inli.innerHTML = arr[k];
                   a_inli.setAttribute('onclick', 'newajx(this.innerHTML)');
                   
                   
               }

               
               for(var i = 0; i<data1.length; i++){
                   console.log(arr[i])
                   $.ajax({
                      url: 'https://loft-art.com.ua/avpz/Controller/bycategory.php?subject=' + arr[i],
                       type: 'GET',
                       success: function(data){
            var inside = document.getElementById('inside');
               for(var i = 0; i<data.length; i++){
               var container = document.createElement('div');
               container.classList.add("craft_article");
               var img = document.createElement('div');
               var in_img = document.createElement('img');
               var article = document.createElement('div');
               var article_hader = document.createElement('h1');
               article_hader.setAttribute('id', "article_name");
               var article_txt = document.createElement('p');
               article.classList.add("article");
               in_img.setAttribute('src', 'images/post-10.jpg');
               img.classList.add("img_box");
                   inside.append(container);
                   container.append(img);
                   img.append(in_img);
                   container.append(article);
                   article.append(article_hader);
                   article.append(article_txt);
                   article_txt.innerHTML = data[i].Text;
                   article_hader.innerHTML = data[i].Name;
                   console.log(data[i]);
               }
               var elem = document.getElementById('article_name');
               elem.innerHTML = data[0].Name;
                       }
                   });
               }
               
               
               
               


          }
       });
        sessionStorage.getItem('username');
        sessionStorage.getItem('role');
        console.log(sessionStorage.getItem('username'));
        console.log(sessionStorage.getItem('role'));
        if(sessionStorage.getItem('username') != null){
            var helo_item = $(".user_name");
            var txt_hello = $(".text_hello");
            var reg = $("#reg");
            var sing = $("#sing");
            var exit = $("#exit");
            console.log(reg[0]);
           reg[0].style.display = "none";
           sing[0].style.display = "none";
           exit[0].style.display = "block";
            
            txt_hello[0].style.display = "block";
//            txt_hello.classList.add("block");
            helo_item[0].innerHTML = sessionStorage.getItem('username');
            if(sessionStorage.getItem('role') == "admin"){
                var create_article = $("#create_article");
                create_article[0].style.display = "block";
            }
        } else{
            reg[0].style.display = "block";
           sing[0].style.display = "block";
           exit[0].style.display = "none";
            
            txt_hello[0].style.display = "none";
        }
        
        
        
       
    });
    
    
            function newajx(){
            var iner = this.innerHTML;
            console.log(iner);
        }
    
    $(document).ready(function(){
        var token = sessionStorage.getItem('access_token');
        $("#comentary_form").submit(function(){
            var data = {
                name: $('#name').val(),
                subject: $('#subject').val(),
                text: $('#text').val(),
                tags: $('#tags').val(),
                accessToken: token
            }
            event.preventDefault()
            $.ajax({
                type: 'POST',
                url: 'https://loft-art.com.ua/avpz/Controller/createArticle.php',
                data: data,
               
            }).done(function(data){
			$("#comentary_form").trigger("reset");     
               console.log(data);
            });

        });
    });
    
    
    
    
    
    
//    $(document).ready(function(){
//         var token = sessionStorage.getItem('access_token');
//           console.log(token);
//        $("#comentary_form").submit(function(){
//           var article_data = {
//               name: $('#name').find.val(),
//               subject: $('#subject').find.val(),
//               text: $('#text').find.val(),
//               tags: $('#tags').find.val(),
//               accessToken: sessionStorage.getItem('access_token')
//           };
//            
//           $.ajax({
//               type: 'POST',
//               url: 'https://loft-art.com.ua/avpz/Controller/createArticle.php',
//               dataType: 'json',
//               data: { 
//                   name: $('#name').find.val(''),
//                   subject: $('#subject').find.val(''),
//                   text: $('#text').find.val(''),
//                   tags: $('#tags').find.val(''),
//                   accessToken: token
//                     },
//               error: function(request, status, error, data) {
//                var statusCode = request.status;
//                    console.log(statusCode);
//                    if(statusCode == 405){
//                        $("#reg_form").trigger("reset");
//                        alert("Not avaible username");
//                    }
//                    if(statusCode == 200){
//    
//                    }
//},
//               done: function(data){
//                   $(this).find("input").val("");
//                   alert("success");
//                   //sessionStorage.setItem('test', data);
//                   //console.log(sessionStorage.getItem(test));
//                   $("#comentary_form").trigger("reset");
//               }
//           }); 
//        });
//    });
    
//    function exit(){
//            sessionStorage.clear();
//        }
    
//    var xhr = new XMLHttpRequest();
//
//      xhr.open('GET', 'https://loft-art.com.ua/avpz/Controller/getcategories.php', false);
//      xhr.send();
//        alert(xhr.responseText);
      

})(jQuery);