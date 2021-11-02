// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML after declaring variable tbody
var tbody = d3.select("tbody");

// build new function
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        //code to loop through each field in the dataRow argument.
        //Object.values, we're telling JavaScript to reference one object from the array of UFO sightings.
        //dataRow argument, values to go into the dataRow. forEach((val) to specify that we want one object per row.
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            //variable to append data to a table: action of appending data into a table data tag (<td>).
            let cell = row.append("td");
            //add the values.
            cell.text(val);
        });  
    });
}
function handleClick() {
    // .select() selects the very first element that matches our selector string: "#datetime". 
    //The selector string is the item we're telling D3.js to look for.
    // chaining .property("value"); to the d3.select function, tells D3 to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable.
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // set a default filter and save it to a new variable i.e original table data because we want users to refine their search on their own terms
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};
//D3.js is that it can listen for events that occur on a webpage, such as a button click. 
//The next code we add will be tied to the filter button we'll build on our webpage.
//adding .on("click", handleClick); tells D3 to execute handleClick() function when the button with an id of filter-btn is clicked.
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);