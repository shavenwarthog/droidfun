$(document).ready(function() {

    // app globals:
    $('body').data('current_spacenum', null);

    // label each parking space with its number
    $.each($(".space"),
	   function(index, value) {
	       $(value).text( $(value).context.id );
	   }
	  );

    // click on a space: shift to color selection screen, fill in space number
    $(".space").click(function() {
	var spacenum = $(this).context.id;
	$('.spacenum_label').text(spacenum);
	$('body').data('current_spacenum', spacenum);

	$(this).parents().removeClass("current");
	$('#Cars').addClass("current");
    });

    // Back: switch to Home
    $(".back").click(function() {
	$('body').data('current_spacenum', null);
	$(this).parents().removeClass("current");
	$("#Home").addClass("current");
    });

    // click on a color/"empty": put color on space, switch to Home
    $(".carcolor td[bgcolor]").click(function() {
	var spacenum = $('body').data('current_spacenum');
	var carcolor = $(this).context.bgColor;
	$('#'+spacenum).css('background-color', carcolor);

	var data = {};
	data['space'+spacenum] = carcolor;
	$.post("parking.cgi", data);

	$('body').data('current_spacenum', null);
	$(this).parents().removeClass("current");
	$("#Home").addClass("current");
    })

    if (0) {
	$('#Home').removeClass("current");
	$("#Cars").addClass("current");
    }

    // $.post("parking.cgi"); // , { 'beer': 'tasty' } );
    // $.get("parking.cgi", function(data) {
    // 	alert('data: '+data);
    // });

});
