
var xvalues=[];
var yvalues =[];


for(var i=0;i<data.length;i++){
	xvalues.push(data[i].updated.substr(0,10));
	yvalues.push(data[i].backPrice)
}