function renderData(){

// takes the data form the data.js file in the same folder and converts it into html text  to be added into page

//assumes it has access to the data[] array contained in the data.js file in the same folder 

var strOutput="<span style=\"font-family:Console,monospace\"";
strOutput+="<p class=\"text-light\">Current date : " + data[0].new_date +"</p>";
strOutput+="<p class=\"text-light\">Prev date : " + data[0].old_date +"</p>";
strOutput+="<p><span class=\"glyphicon glyphicon-arrow-up\"></span></p>";
strOutput+="<table class=\"table table-striped table-dark table-hover\">";
strOutput+= "<thead>";
    strOutput+="<tr>";
      strOutput+="<th class=\"text-light\">Market-runner</th>";
      strOutput+="<th scope=\"col\">Price</th>";
      
      
    strOutput+="</tr>";
  strOutput+="</thead>";
  strOutput+="<tbody>"
    
	


for(var i=0;i<data.length;i++){
//	for(var i=0;i<2;i++){
	
var styling ="";
if(data[i].current_price < data[i].prev_price){
	styling = " class =\"bg-success\"";
} else if(data[i].current_price > data[i].prev_price){
	styling = " class =\"bg-danger\"";
}

	
strOutput += "<tr>";
	strOutput += "<th scope=\"row\">"+data[i].marketRunner +"</th>";
	
	
	
	//strips out any back prices of 100 or over - for neatness
	if(data[i].current_price < 100){

		strOutput += "<td"+styling+">"+data[i].current_price +" / " + data[i].prev_price +" " +  getDifference(data[i].current_price,data[i].prev_price) + "</td>";
	}
		//strOutput += "<td"+styling+">"+data[i].prev_price +"</td>";

	
	
	//strOutput += "<td>"+data[i].current_price +"</td>";
	//rOutput += "<td>"+data[i].prev_price +"</td>";
	//strOutput += "<td>"+data[i].new_date +"</td>";
	//strOutput += "<td>"+data[i].old_date +"</td>";
	strOutput+="</tr>";
	
							}
			

strOutput+="</tbody>";
strOutput+="</table></span>";

			
//now add this text to the div

	$("#data").html(strOutput)							
}


renderData();

function getDifference(newPrice, oldPrice){
	// gets the difference in implied probablity between the old and new price// and returns it together with the right arrow from fontawesome
	
	var output = "";
	
	var chance1 = (1/newPrice) * 100;
	var chance2 = (1/oldPrice) * 100;
	
	
	
	 console.log(chance1);
	 console.log(chance2);
	
	
	if(chance1>chance2){
		
		output = "<i class=\"fas fa-arrow-up\"></i> " + (chance1-chance2).toFixed(1) +"%";
	} else if(chance2>chance1){
		output = "<i class=\"fas fa-arrow-down\"></i> " + (chance2-chance1).toFixed(1) +"%";
	}
	
	
	return output; 
	
}