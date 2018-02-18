var options = {
  valueNames: [ 'id','product','name', 'surname','phone','adress','city','date' ],
  item: '<tr><td class="id"></td><td class="product"></td><td class="name"></td><td class="surname"></td><td class="phone"></td><td class="adress"></td><td class="city"></td><td class="date"></td></tr>',
  page: 5,
  pagination:true
};
var userList = new List('users', options);	
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "storage/data.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});
function processData(allText) 
{
    var allTextLines = allText.split(/\r\n|\n/);
    var lines = [];
    for (var i=0; i<allTextLines.length; i++)
	{
        var data = allTextLines[i].split(';');
		if(data[1] != undefined)
		{
		userList.add({
			id: data[0],
			product: data[1],
			name: data[2],
			surname: data[3],
			phone: data[4],
			adress: data[5],
			city: data[6],
			date: data[7]
		});
		}	
    }	
}
var options_products = {
	valueNames: ['id','name','price'],
	item: '<tr><td class="id"></td><td class="name"></td><td class="price"></td></tr>',
	page: 5,
	pagination:true
};
var productsList = new List('products',options_products);
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "storage/products.csv",
        dataType: "text",
        success: function(data) {readProducts(data);}
     });
});
function readProducts(allText) 
{
    var allTextLines = allText.split(/\r\n|\n/);
    var lines = [];
    for (var i=0; i<allTextLines.length; i++)
	{
        var data = allTextLines[i].split(';');
		if(data[1] != undefined)
		{
		productsList.add({
			id: data[0],
			name: data[1],
			price: data[2]
		});
		}	
    }
}