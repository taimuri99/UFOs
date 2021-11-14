# UFOs
Module 11 JS & HTML: UFO Sightings with JavaScript
## Overview of Project
After making a dynamic webpage with a table of data on UFO sightings that can be filtered by date of the event, we were tasked to create additional filters for this challenge:

 1. Location of the sighting
    - City
    - State
    - Country
 2. Appearance of the UFO seen
    - Shape

The aim of the webpage is to update each time an input is entered into one of the filtering fields. The change is recorded by the code:

    d3.selectAll("input").on("change", updateFilters);
        
This change is recorded and the updateFilters function runs which gets the value and ID of the input field data and adds it to an object called filters. The active input is added to the object and if none exists then it is removed from the object. The filters object is used in the filterTable function to update and filter the table according to the active input filters present in the object. The HTML is also updated to include input fields for these various criteria.

## Results
The webpage consists of an image and detailed description of UFO sightings in addition to a table of data which can be filtered. This data consists of UFO sightings, the date and location of the event, plus some additional details of the event such as the appearance of the UFOs. The following is a screenshot of the webpage with unfiltered data in the table:

<img width="1440" alt="MainPage" src="https://user-images.githubusercontent.com/87828174/141668832-1a4ee9ff-2eb8-4e9b-8772-00b667809c77.png">


### Filtering Walkthrough
These are step by step instructions to filter the data.

#### Filtering Table
<img width="367" alt="FilterBar" src="https://user-images.githubusercontent.com/87828174/141668468-e5973e6a-ea50-4e60-be41-81e2b722a943.png">
This Filter Search table holds the 5 different input fields which are used to filter the data. In the format which is given one can enter a specific date, city, state, country and shape seperately or as multiple filters to see specific records.

#### Single Filter
The first picture is an unfiltered dataset.

<img width="1438" alt="unfiltered" src="https://user-images.githubusercontent.com/87828174/141668542-e62da5b4-bc5b-45fd-809e-347ceea5cf4f.png">

As an example one can put the first filterin by typing a specific date in the date input field where it says _Enter Date_ as shown in the following image:

<img width="1440" alt="filterone" src="https://user-images.githubusercontent.com/87828174/141668597-dd3c4e80-3603-49f6-85f1-ff5c0cbb461f.png">

As you can see, records are now shown only for the date entered which was 1/1/2010.

#### Double Filter
In this filtered table one can add an additional filter. For an example as shown in the image below, the city input field is filtered to _el cajon_:

<img width="1440" alt="filtertwo" src="https://user-images.githubusercontent.com/87828174/141668672-7344871d-dec7-4b46-a9e4-e24869dce651.png">

The filtered table now only shows 4 records for the date of 1/1/2010 and the city of El Cajon.

#### Multiple Filters
Lastly one can put an additional filter on this data set in the shape section. This is an appearance description of the UFO. As an example, _triangle_ is added and the resulting dataset is of only two records satisfying *all* three of the filters applied.

<img width="1440" alt="filterthree" src="https://user-images.githubusercontent.com/87828174/141668746-2a687580-b03d-4d42-86bd-f995df70ebe8.png">

Note: Put the data in the filtering fields in the same format as mentioned there:

1. Date: 1/10/2010
2. City: roswell
3. State: ca (California)
4. Country: us
5. Shape: circle

In addition to the above instructions, to clear the table or reset it, one must click the UFO sightings button in the top left as shown below:

<img width="161" alt="ClearFilter" src="https://user-images.githubusercontent.com/87828174/141668842-6b871590-fd7e-44fb-a511-1d8559c7a404.png">

## Summary
### Drawback
### Recommendations
