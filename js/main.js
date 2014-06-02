$(document).ready(function () {

function deleteitem () {
	 $(document).on('click','.item',function(){
		$(this).remove();
	});
}

function displayLists () {
	var item= $('#shop-item').val();
	var listitem ='<li class="item animated fadeIn">'+ item + '</li>';
	//validates
	event.preventDefault();

	if(!$.trim(item)) {
		$('.error').show();
		 return false;
	}
else {
	$('.error').slideUp();
	$('ul').prepend(listitem);
	$('#item-list')
        .css('display', "block")
        .addClass('animated bounceIn');
    $('ul > li')
        .css("margin-top", "-10px")      
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
}
	
        
};
function fetchLists () {
	$('#shop-item').keydown(function (enter){
		if (enter.keyCode == 13){
			displayLists();
			
		}
	});
}
fetchLists();
deleteitem();
});