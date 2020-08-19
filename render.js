function renderData(){

// takes the data form the data.js file in the same folder and converts it into html text  to be added into page

//assumes it has access to the data[] array contained in the data.js file in the same folder 

var strOutput="";
strOutput+="<p class=\"text-light\">Current date : " + data[0].new_date +"</p>";
strOutput+="<p class=\"text-light\">Prev date : " + data[0].old_date +"</p>";
strOutput+="<table class=\"table table-striped table-dark table-hover\">";
strOutput+= "<thead>";
    strOutput+="<tr>";
      strOutput+="<th scope=\"col\">Market-runner</th>";
      strOutput+="<th scope=\"col\">New price</th>";
      strOutput+="<th scope=\"col\">Old price</th>";
      
    strOutput+="</tr>";
  strOutput+="</thead>";
  strOutput+="<tbody>"
    
	


for(var i=0;i<data.length;i++){
strOutput += "<tr>";
	strOutput += "<th scope=\"row\">"+data[i].marketRunner +"</th>";
	
	if(data[i].current_price < data[i].prev_price){
		strOutput += "<td class=\"text-success\">"+data[i].current_price +"</td>";
	} else if(data[i].current_price > data[i].prev_price){
		strOutput += "<td class = \"text-danger\">"+data[i].current_price +"</td>";
	} else {
		strOutput += "<td>"+data[i].current_price +"</td>";
	}
	
	
	//strOutput += "<td>"+data[i].current_price +"</td>";
	strOutput += "<td>"+data[i].prev_price +"</td>";
	//strOutput += "<td>"+data[i].new_date +"</td>";
	//strOutput += "<td>"+data[i].old_date +"</td>";
	strOutput+="</tr>";
	
							}
			

strOutput+="</tbody>";
strOutput+="</table>";

			
//now add this text to the div

	$("#data").html(strOutput)							
}


renderData();