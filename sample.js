
var data;


	var ractive = new Ractive({
	      // The `el` option can be a node, an ID, or a CSS selector.
	      el: '#container',

	      // We could pass in a string, but for the sake of convenience
	      // we're passing the ID of the <script> tag above.
	      template: '#template',

	      // Here, we're passing in some initial data
	      data: { data: data}
	});



function getData () {
	
	$.get("http://www.dweet.io/get/latest/dweet/for/machinebucm6").then(function  (result) {

		data = result;
		data.machine = data["with"];
		data.machinename = data["with"][0].thing

		ractive.set('data', data);
			
	})

	setInterval(getData, 100000)

}

getData()





// data = {
//     "this": "succeeded",
//     "by": "getting",
//     "the": "dweets",
//     "with": [{
//         "thing": "machinebucm6",
//         "created": "2016-01-08T16:27:37.052Z",
//         "content": {
//             "water": 100,
//             "milk": 100,
//             "sugar": 100,
//             "coffee": 100,
//             "tea": 100,
//             "cpcino": 100,
//             "cacao": 100,
//             "chclate": 100,
//             "cups1": 100,
//             "cups2": 100,
//             "cups3": 100,
//             "cups4": 100,
//             "cups5": 100,
//             "empty1": 100,
//             "empty2": 100
//         }
//     }]
// }