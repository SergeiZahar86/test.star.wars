/*
import jQuery from "./jQuery_3.6.0.js";
window.$ = window.jQuery = jQuery;
*/


/*
var script = document.createElement('script');
script.src = 'JS/jQuery_3.6.0.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
*/

class Person
{
	constructor(name, height)
	{
		this.name = name;
		this.height = height;
	}
}

class Person1
{
	constructor(name, height, mass, hair_color, skin_color,
	            eye_color, birth_year, gender, homeworld, films, species,
	            vehicles, starships, created, edited, url)
	{
		this.name = name;
		this.height = height;
		this.mass = mass;
		this.hair_color = hair_color;
		this.skin_color = skin_color;
		this.eye_color = eye_color;
		this.birth_year = birth_year;
		this.gender = gender;
		this.homeworld = homeworld;
		this.films = films;
		this.species = species;
		this.vehicles = vehicles;
		this.starships = starships;
		this.created = created;
		this.edited = edited;
		this.url = url;
	}
}

//console.log($('body'));
$(document).ready(function ()
{
	var jqxhr = $.getJSON("https://swapi.dev/api/people", function (data)
	{
		/*var serializedUser = JSON.stringify(new Object());
		console.log(serializedUser );*/

		var items = [];
		var items2 = [];
		var items3 = [];
		var items4 = [];
		let Heros = [];
		$.each(data, function (key, val)
		{
			items.push("<li id='" + key + "'>" + val + "</li>");
			console.log("val: " + val);
			if (key == 'results')
			{
				console.log("val Object: " + val);

				$.each(val, function (key1, val2)
				{
					/*console.log("key1 : " + key1);
					console.log("val2 : " + val2.name);
					var dd = val2;
					console.log("dd : " + dd);
					items2.push(val2);*/
					var hero1 = new Person1(val2.name, val2.height, val2.mass, val2.hair_color,
						val2.skin_color, val2.eye_color, val2.birth_year, val2.gender, val2.homeworld,
						val2.films, val2.species, val2.vehicles, val2.starships, val2.created, val2.edited, val2.url)
					console.log(hero1);
					Heros.push(hero1);
					$.each(hero1, function (key2, val3){
						items2.push("<li id='" + key2 + "'>" + val3 + "</li>");
					});
					$("<ul/>", {
						"class": "my-new-list",
						html: items2.join("")
					}).appendTo("body");
					items2.length = 0;
				})

				/*$.each(items2, function (key2, val3)
				{
					//console.log( "key2 : " + key2 );
					console.log("val3 : " + val3.name);

					items3.push(val3);
				})
				$.each(items3, function (key3, val4)
				{
					var ff = val4.name;
					console.log("ff: " + ff);
					console.log("val2: " + val4);
					items4.push("<li id='" + key3 + "'>" + val4 + "</li>");
				})*/

				/*$("<ul/>", {
					"class": "my-new-list",
					html: items4.join("")
				}).appendTo("body");*/

				/*getHero(items4);
				items4.length = 0;*/
			}
		});

		$("<ul/>", {
			"class": "my-new-list",
			html: items.join("")
		}).appendTo("body");


		function getHero(data)
		{
			$("<ul/>", {
				"class": "my-new-list",
				html: data.join("")
			}).appendTo("body");
		}
		var sss = Heros;
		$.each(sss, function (index, value){
			console.log("Heros index: " +index + '; Значение: ' + value);
			var kk  = value;
			$.each(kk, function (index1, value1){
				console.log("Hero i: " +index1 + '; Значение: ' + value1);
			});
		});
		console.log("Heros: " +sss);
	})
		.done(function (json)
		{
			console.log(json);
			console.log("JSON Data: " + json.name);
			$.each(json.vehicles, function (sss, mat)
			{
				console.log(sss + mat);
			})
			var fff = new Person(json.name, json.height);
			console.log(fff)
			/*var serializedUser = JSON.parse(json);
			console.log("11  "+serializedUser.name );*/
			/*let user = new user('json.name', 'json.height');
			console.log( user );*/

		})
		.done(function ()
		{
			console.log("second success");
		})
		.fail(function ()
		{
			console.log("error");
		})
		.always(function ()
		{
			console.log("complete");
		});

});

function update_table_mat()
{
	getAllMat(function (data)
	{
		console.log(data);
		fillTableMat(data);
	}, function ()
	{
	})
}

function getAllMat(success, error)
{
	$.ajax({
		type: "GET",
		contentType: "json",
		cache: false,
		url: "https://swapi.dev/api/people/1",
		success: success,
		error: error
	});
}


function fillTableMat(mats) // функция добавления данных в таблицу материалов
{
	console.log(mats);
	/*var tbodyMat = $("#tbody_mat"); // Получаем узел тела таблицы материалов
	tbodyMat.empty();  // отчистка таблицы
	$.each(mats, function (i, mat) // Перебираем
	{
		var tr = $('<tr>').append(
			$('<td class="td">').text(i + 1),
			$('<td class="td">').text(mat.name),
			$('<td class="td">').append($('<button onclick="change_mat(' + mat.id + ')" type="button"' +
				' class="popup-open popupChangeMatBtn btn btn-secondary btn-sm " >').text("Изменить")),
		);
		tbodyMat.append(tr);
	})*/
}





