$( document ).ready(function() {
	var item_number = 1;
	var table_row = $('.one_item').html();
	$(".item_number").last().html(item_number); 
	$('.item_field').last().on("keyup",function(e) {
		if(e.keyCode == 13)
		{
		  item_number++;
		  // console.log(a);
		  $(".items_table").append('<tr class="one_item">'+table_row+'</tr>');
		  $(".one_item").last().attr('id', 'item_'+item_number);
		  $(".item_number").last().append(item_number);  
		  console.log(item_number);
		}
	});

	$('.field').on("keyup",function(e1) {
		if(e1.keyCode == 9) {
			var item_data=$('.field').val();
			console.log(item_data);
		}
	});	
});