// from data.js
var tableData = data;


// YOUR CODE HERE!
var button=d3.select("#filter-btn")
var datefilter=d3.select("#datetime")
var cityfilter = d3.select("#city");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var populate = (tableData) => {

  tableData.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(tableData);
