let input="";
function ShowValue(btn) {
	input=input+ btn.value;
	document.getElementById("output").innerHTML= input;
};
function quickMath(){
	document.getElementById("output").innerHTML= eval(input);
}