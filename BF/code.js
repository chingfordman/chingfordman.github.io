
function sayHello(){
alert('hello')
}


function sendAjax(){
$.ajax({
  url: "/BF/markets.json",
  type: 'GET',
    
  success: function(data) {
    //called when successful
	console.log("ajax request successful");
    //$('#response').text(data);
	process(data)
	
	
  },
  error: function(e) {
    //called when there is an error
    console.log("an error occurred8");
  }
}); 


	
}
function process(data){
	
console.log("processing data8");
try {
var thisObj = JSON.parse(data);
} catch (e){
	Console.log("Error parsing data " +e.message);
}
console.log(thisObj[0].marketName);

var strHtml = "";
strHtml+="<select>";

for(var i=0;i<thisObj.length;i++){
	console.log("a");
	strHtml+="<option value=\""+thisObj[i].marketName+"\">"+thisObj[i].marketName +"</option>";
}

strHtml+="</select>";

$("#results").html(strHtml);
console.log("b");
}