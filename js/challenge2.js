$(document).ready(function(){
	$("#useBilling").click(function(){
	if ($("#useBilling").is(":checked")) {
		$("#home").val($("#billing").val());
		$("#home").attr("disabled", "disabled");
	}
	else {
		$("#home").removeAttr("disabled");
  	}
	})
})


// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
// 	}
