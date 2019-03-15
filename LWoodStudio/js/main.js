$( document ).ready(function() {

/* Anchor Scroll*/ 
$('a[href^="#"]').click(function(event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top - 50;
	$('body,html').animate({
		scrollTop: top
	}, 1000);
});
  
/* Product ID to Modal */ 
$(".production-item .item-order").on('click', function() {
	$product_id = $(this).parents('.production-item').attr('data-product');
	$("#orderModal input[name='product_id']").val($product_id);
});

/* Add file name from input[type="file"] to label */ 
$('form .file-container input').on('change', function() {
        var filename = $(this).val();
			label = $(this).siblings('label');
        if (filename.substring(3,11) == 'fakepath') {
            filename = filename.substring(12);
        } // Remove c:\fake at beginning from localhost chrome
		$(label).addClass('active');
        $(label).html(filename);
});

/* Remove file from input[type="file"] */ 
$('form .file-container .file-remove').on('click', function() {
        var input = $(this).siblings('input');
			label = $(this).siblings('label');
		$(input).val('');
		$(label).removeClass('active');
        $(label).html('Прикрепить фото');
});

/* Mobile menu */
$("header .menu-charger").on('click', function() {
	$(this).toggleClass('active');
	$("header .mobile-nav").toggleClass('active');
});
$("header .mobile-nav nav li a").on('click', function() {
	$('header .menu-charger').removeClass('active');
	$("header .mobile-nav").removeClass('active');
});


/* Sticky menu */
$(function() {
  if(window.innerWidth > 768) {
    var header = $('header');
		header_h = $('header').height();
		trigger = $('.trigger-1');
		trigger_h = $('.trigger-1').height();
		marginY = header_h + trigger_h;
   
    $(window).bind('scroll', function(){
		var currentY = $(document).scrollTop();
    
		if(currentY > marginY){
		   header.addClass('sticky');
		   trigger.css('margin-top', header_h );
		} else if(currentY < marginY){
		   header.removeClass('sticky');
		   trigger.css('margin-top', '' );
		}
	});
  };
});



/* Phone Mask */
$(function() {
   $(".phone").mask("+7 (999) 999-99-99");
});


/* Form ajax-handler with attachment */
var allowed_file_size 	= "1048576"; //1 MB allowed file size
var allowed_file_types 	= [ 'image/png', 'image/gif', 'image/jpeg', 'image/pjpeg', 
							'application/x-zip-compressed', 'application/pdf', 'application/msword', 
							'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
							]; //Allowed file types
var border_color 		= "#dfdfdf"; //initial input border color
var background_color 	= "#f6f6f6"; //initial input background color
var maximum_files 		= 1; //Maximum number of files allowed

$("#calculation-form3,#calculation-form4").submit(function(e){
    e.preventDefault(); //prevent default action 
	proceed = true;
	
	//simple input validation
	$($(this).find("input[data-required=true], textarea[data-required=true]")).each(function(){
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','#ed9889'); //change border color to red   
				$(this).css('background-color','#faecea'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
 
	}).on("input", function(){ //change border color to original
		 $(this).css('border-color', border_color);
		 $(this).css('background', background_color);
	});
	
	//check file size and type before upload, works in all modern browsers
	if(window.File && window.FileReader && window.FileList && window.Blob){
		var total_files_size = 0;
		if(this.elements['file_attach[]'].files.length > maximum_files){
            alert( "Can not select more than "+maximum_files+" file(s)");
            proceed = false;			
		}
		$(this.elements['file_attach[]'].files).each(function(i, ifile){
			if(ifile.value !== ""){ //continue only if file(s) are selected
                if(allowed_file_types.indexOf(ifile.type) === -1){ //check unsupported file
                    alert( ifile.name + " is not allowed!");
                    proceed = false;
                }
             total_files_size = total_files_size + ifile.size; //add file size to total size
			}
		}); 
       if(total_files_size > allowed_file_size){ 
            alert( "Make sure total file size is less than 1 MB!");
            proceed = false;
        }
	}
	
	var current_form = $(this);
	var post_url = $(this).attr("action"); //get form action url
	var request_method = $(this).attr("method"); //get form GET/POST method
	var form_data = new FormData(this); //Creates new FormData object
	
	//if everything's ok, continue with Ajax form submit
	if(proceed){ 
		$.ajax({ //ajax form submit
			url : post_url,
			type: request_method,
			data : form_data,
			contentType: false,
			cache: false,
			processData:false,
			success: function (data) {
				$(current_form)[0].reset();
				/*$.fancybox.open({
					src: '#thanksModal'
				});*/
				$(current_form).find('.file-container label').removeClass('active');
				$(current_form).find('.file-container label').html('Прикрепить фото');
				setTimeout(function(){ window.location.replace("http://lwood.studio/thanks.html"); }, 500);
            },
			error: function(){
				alert('Could not send mail! Please check your PHP mail configuration!');
			}
		})
	}
});


});