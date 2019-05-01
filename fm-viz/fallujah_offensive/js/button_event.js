function tableButtonBefore(){
	var total = document.getElementById("total_table");
	var before = document.getElementById("before_table");
	var after = document.getElementById("after_table");
	var during = document.getElementById("during_table");
	before.style.display = "block";
	total.style.display = "none";
	after.style.display = "none";
	during.style.display = "none";
}

function tableButtonDuring(){
	var total = document.getElementById("total_table");
	var before = document.getElementById("before_table");
	var after = document.getElementById("after_table");
	var during = document.getElementById("during_table");
	during.style.display = "block";
	total.style.display = "none";
	before.style.display = "none";
	after.style.display = "none";
}

function tableButtonAfter(){
	var total = document.getElementById("total_table");
	var before = document.getElementById("before_table");
	var after = document.getElementById("after_table");
	var during = document.getElementById("during_table");
	after.style.display = "block";
	total.style.display = "none";
	before.style.display = "none";
	during.style.display = "none";
}

function tableButtonTotal(){
	var total = document.getElementById("total_table");
	var before = document.getElementById("before_table");
	var after = document.getElementById("after_table");
	var during = document.getElementById("during_table");
	total.style.display = "block";
	before.style.display = "none";
	after.style.display = "none";
	during.style.display = "none";
}
