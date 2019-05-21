// from data.js
var tabledata = data;

// Variables
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(data);


function filterTableButton() {
	
	d3.event.preventDefault();
	
	var searchDate = d3.select("#datetime").property("value");
  var searchcity=d3.select("#City").property("value");
  var searchState=d3.select("#State").property("value");
  var searchCountry=d3.select("#Country").property("value");
  var searchShape=d3.select("#Shape").property("value");

	var filteredDatas = data;

	if (searchDate != ""){
    	filteredDatas = filteredDatas.filter(filterdata => filterdata.datetime === searchDate);
    }
    if (searchcity !=""){
    	filteredDatas = filteredDatas.filter(filterdata => filterdata.city.toLowerCase() === searchcity.toLowerCase());
    }
    if (searchState !=""){
      filteredDatas = filteredDatas.filter(filterdata => filterdata.state.toLowerCase() === searchState.toLowerCase());
      }
  if (searchCountry !=""){
      filteredDatas = filteredDatas.filter(filterdata => filterdata.country.toLowerCase() === searchCountry.toLowerCase());
      }
  if (searchShape !=""){
      filteredDatas = filteredDatas.filter(filterdata => filterdata.shape.toLowerCase() === searchShape.toLowerCase());
      }

    tbody.html('');
    populate(filteredDatas);
}

function resetTableButton() {
	tbody.html('');
	populate(tabledata);
}

populate(tabledata);
button.on("click", filterTableButton );
resetbtn.on("click", resetTableButton );