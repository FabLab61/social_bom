$( document ).ready(function() {
	//123
	$('.selectpicker').selectpicker();

	var table_row = $('.one_item').html();
	$("tr").last().addClass('last');
	var item_num = 1;
	$(".item_number").last().html(item_num);

		$('table').on("keydown",".last input[name='item'], .last input[name='subsystem'], .last input[name='quantity']",function(e) {
			if(e.keyCode == 13)		// enter in item
			{
			  item_num++;		
	          console.log("Key pressed");
	            $("tr").each(function(){
	                $(this).removeClass("last");
	            });   
			  $("table").append('<tr class="one_item">'+table_row+'</tr>');
	          $("tr").last().addClass('last');
	          $(".one_item").last().attr('id', 'item_'+item_num);
	          $(".item_number").last().html(item_num);
			}    
		});





	// // var current_item = 1;
	// // var table_row = $('.one_item').html();
	// // var characteristics_row = $('.characteristics').html();

	// * Runchev 13.04.2014		Show exchange fields in bom's form
	$('#extended_view').click(
    	//$(".extended").toggle(this.checked);
	 	function(){
		  if ( $('.extended').css('visibility') == 'hidden' )
		  {
		    $('.extended').css('visibility','visible');
		  }else{
		    $('.extended').css('visibility','hidden');
		  }
	});


	// // console.log(characteristics_row);

	// $(".current_item").last().html(current_item); 
	// $(".one_item").last().attr('id', 'item_'+current_item);
	
	// $('.item_field').last().on("keyup",function(e) {
	// 	if(e.keyCode == 13)		// enter in item
	// 	{
	// 	  current_item++;
	// 	  // console.log(a);
	// 	  $(".items_table").append('<tr class="one_item">'+table_row+'</tr>');
	// 	  $(".one_item").last().attr('id', 'item_'+current_item);
	// 	  $(".current_item").last().append(current_item);  
	// 	  console.log(current_item);
	// 	}
	// });


	// // Add new characterision on function 

	// $('.charactristic_name').last().on("keydown",function(e2) {
	// 	if(e2.keyCode == 13)		// enter in item
	// 	{
	// 		$(".characteristics").append(characteristics_row);
	// 	}
	// });

	// // Delete characteristic

	// $('.charactristic_name').last().on("keypress",function(e3) {
	// 	if(e3.keyCode == 37)		// enter in item
	// 	{	
	// 		alert("fUUUUUU");
	// 		$(".characteristics-wrapper").last().remove();
	// 	}
	// });


	// // Serialize when end fillment row values

	// $('.last_input').on("keyup",function(e1) {
	// 	if(e1.keyCode == 9) {
	// 		$.get("/add", $('.item_form').last().serialize());
	// 		console.log($('.item_form').last().serialize());

	// 	}
	// });


	// $('.submit_item').click(function(){
 //    	$.get("/add", $('.item_form').last().serialize());
 //    	console.log($('.item_form').last().serialize())
	// });


	// // console.log($('#select_permissions').find(':selected').text());

		$('#select_permissions').change(function(){
            var selected = $(this).find(':selected').val();
          console.log(selected);
           if (selected == 1)
	   		{
	  		   $("#bom_rules_mask").html("<table class='table'><tr><td><input type='checkbox'>чтение (просмотр)</td><td><input type='checkbox'>комментирование</td><td><input type='checkbox'>редактирование</td></tr></table>"); 
	 		}
	 		else if (selected == 2)
	 		{
	 		   $("#bom_rules_mask").html("<table class='table'><tr><td><input type='checkbox'>чтение (просмотр)</td><td><input type='checkbox'>комментирование</td><td><input type='checkbox'>редактирование</td></tr></table>");
	 		}
	 		else if (selected == 3){
	 			$("#bom_rules_mask").html("table class='table'><tr><td><input tupe='checkbox'>чтение (просмотр)</td><td><input type='checkbox' checked='checked' onclick="ONNnclick()" autocomplete="off">комментирование</td><td><input type='checkbox'>редактирование</td></tr></table>");
	 		}
	 		else 
	 		{
	 		   $("#bom_rules_mask").html(selected);
	 		}
       });
	// // Show rules depending on selected values

	


	
});