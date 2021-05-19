$(document).ready(function ()
{
	update_table_mat();
	//getAllMat();
});

function update_table_mat()
{
	getAllMat(function (data)
	{
		console.log("1 : ++++  " + data);
		fillTableMat(data);
	}, function ()
	{
	})
}

function fillTableMat(mats) // функция добавления данных в таблицу материалов
{
	console.log(JSON.stringify(mats));
}

function getAllMat(success, error)
{
	console.log("1 : ++++  ");
	$.ajax({
		type: "GET",
		url: "https://swapi.dev/api/people",
		success: success,
		error: error
	})
		.then(function (result)
		{
			console.log("2 : ++++  ");
			console.log(JSON.stringify(result));
			//setTimeout(console.log('1111'), 2000);
			return $.ajax('https://swapi.dev/api/people')
		})

		.then(function (result)
		{
			console.log(JSON.stringify(result));
			//setTimeout(console.log('2222'), 3000);
			return $.ajax('http://echo.jsontest.com/id/3')
		})

		.then(function (result)
		{
			//setTimeout(console.log('3333'), 2000);
			console.log(JSON.stringify(result));
		});
};
