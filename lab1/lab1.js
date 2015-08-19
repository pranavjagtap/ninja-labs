var http =  require('http');
var fs = require('fs');
var js2xmlparser = require("js2xmlparser");

fs.readFile('source.json', function (err, jsonBufferedObject) {
    'use strict';
    
	if (err) { throw err };
	console.log(jsonBufferedObject.toString());

	//jsonBufferedObject is in Buffer format and not in String format.
	var text = generateTabularData(jsonBufferedObject);
	//
	writeToFile("destination.txt",text);
	//
	var sortedArray = sortObject("score",jsonBufferedObject,"desc");
	//
	var newObjForXML = generateObjForXMLGeneration(sortedArray);
	//
	generateXML(newObjForXML);
}); 

/**
 * Functions for help
 */

/**
 * method-level comments...
 *
 */
function generateTabularData(jsonBufferedObject){
	var jsonStringObject = JSON.parse(jsonBufferedObject.toString());
	var keys = Object.keys(jsonStringObject);	
	var tabularData = "";
	var temp = "";
	var i =0;

	for(obj in jsonStringObject[keys[0]])
	{
		//take header only once
		if (i == 0) {
			for(key in jsonStringObject[keys[0]][obj])
			{
				temp+= key + "	|	";
			};
			i++;
			tabularData += temp + "\n";
			temp="";
		};
		
		//take all other jsonBufferedObject
		for(key in jsonStringObject[keys[0]][obj])
		{
			temp+=jsonStringObject[keys[0]][obj][key] + "	|	";
		};
		tabularData += temp + "\n";
		temp="";
	};

	//console.log(tabularData);
	return tabularData;
};

function writeToFile(fileName , text){
	fs.writeFile(fileName, text, function(err) {
	    if(err) {
	        console.log(err);
	    } else{
	       	console.log("The file was saved successfully with name "+fileName+"!");
	    };
	});
};

function orderArray(json_array,colName,order){

	var testData = [];
	var sortedArray = [];

	//create array of column data to be sorted.
	for (var i = 0; i < json_array.length; i++) {
		//console.log(json_array[i][colName]);
		testData.push(json_array[i][colName]);
	};

	//console.log(testData);

	//Sort the testData column.
	testData = testData.sort(function(a,b) {
		if (order == "asc") {
			return b-a;
		}
		if(order == "desc")
			return a-b;

		return a-b;
	});

	//generate sorted array of objects as per the testData order
	for (var i = 0; i < json_array.length; i++) {
		for (var j = 0; j < json_array.length; j++) {
			if (json_array[j][colName] == testData[i])
			{
				sortedArray.push(json_array[j]);
			};
		};
	};

	//console.log(sortedArray);
	return sortedArray;
};

function convertObjectToArray(data){
	var json_data = JSON.parse(data.toString());
	var keys = Object.keys(json_data);
	var json_array = [];

	for(obj in json_data[keys[0]])
	{
		json_array.push(json_data[keys[0]][obj]);
	}
	return json_array;
};

function sortObject(colName,data,order){
	var json_array = convertObjectToArray(data);
	var sortedArray = orderArray(json_array,colName,order);

	return sortedArray;
};

function generateObjForXMLGeneration(sortedArray){
	var newObj ={};
	newObj['student'] = sortedArray;
	var keys = Object.keys(newObj);

	//console.log(newObj);
	for (var i = 0; i < newObj[keys].length; i++) {
		for(prop in newObj[keys][i])
		{
			if (prop == "id") {
				var item = { "id": newObj[keys][i][prop]};
				delete newObj[keys][i][prop];
				newObj[keys][i]["@"] = item;
			};
			if (prop == 'fName') {
				newObj[keys][i]["name"] = newObj[keys][i][prop] + " ";
				delete newObj[keys][i][prop];
			};
			if (prop == 'lName') {
				newObj[keys][i]["name"] += newObj[keys][i][prop];
				delete newObj[keys][i][prop];
			};
			if (prop == 'score') {
				var val = newObj[keys][i][prop];
				delete newObj[keys][i][prop];
				newObj[keys][i]["score"] = val;
			};
		//console.log(prop +" -- "+ newObj[keys][i][prop]);
		};
	//var my_keys = Object.keys(newObj[keys][i]);
	//console.log(newObj[keys][i]);
	};
	//console.log(newObj);
	return newObj;
};

function generateXML(newObjForXML){

	var options = {
	    arrayMap: {
	        "students": "student"
	    }
	};

	writeToFile("destination.xml" , js2xmlparser("students", newObjForXML, options))
	//console.log(js2xmlparser("students", newObjForXML, options));
}

