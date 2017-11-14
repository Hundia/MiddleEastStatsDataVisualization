Authors
-------
Research and development by Eli Hundia at Haifa Univercity as part of a Data Visualization course in my MSC at CS. 

Introduction
------------
The project is about a range of different stats and data over the years about Israel and its tier-1 neighbors, Joran, Egypt, Lebanon and the Palestinian authority.
The project focuses the times of wars between the countries, several years before and after each war in hope to see how a war has influenced the countries involved in different aspects such as population stats, financial stats, education and military.
I believe that presenting the raw data collected, in an aspect of how the past wars in the middle east had affected the fighting countries and the region in a scope of before and after each war, can be an extremely useful tool for researchers from different fields, fields like economics, history, social researchers and more that wish to study the effects of wars on their fields of research.

Database
--------
The source for all the data was the "World bank of data", https://data.worldbank.org/, in which I extracted a subset of data for the countries mentioned above. I Also relied on Wikipedia for a general description of each war.
The data gathered is a subset of a larger data about countries worldwide, Data that is categories over 1506 different categories about a variety of different interests and topics such a population, economics, education and much more.
The subset data collected is of the years 1960 to 2016, and for the tier-1 countries surrounding Israel.

The server
----------
I have written a node.js server from scratch, in several layers, that reads the dataset from the JSON created as described in the "What" section into its runtime memory (no consistent MongoDB and some other funky overkills at this solution) using pre-built API's to query the data with ease, while eventually serving as a webserver that allows REST API requests from html web pages on the dataset. The queries are extremely generic in nature, they allow a web browser user to query for a category, under range of years, and for a given list of countries – Maximum flexibility to ask basically whatever query you have in mind. Given a query, the server will run through the entire dataset, gather the information requested, wrap it up in a JSON formatted response and send it back to its origin querying source.

The browser
-----------
I have created a fully functional website, under my personal belief that this website can serve as a tool for researches to investigate the effects of wars on different aspects of our day to day lives. I took the time to build a stable, scalable, dynamic and fast and user-friendly website, in hope that it might serve as a framework or a tool for future academic developments / research that will expand / utilize it to their needs.
I have given as much as though to the user interfaces as I gave the actual data representation. To wonder around different times in history, let alone in different categories in our day to day lives, has to be a simple task for the user or he might get lost in the data. After running though countless ideas and frameworks, I have concluded that a timeline, to iterate over the years is by far the most simple and intuitive user interface to wonder around through the wars. With the timeline, in order provide some basic information about each conflict, I added a brief quotation from Wikipedia, to give the user a brief background to the conflict for which its data he is about to see. Not only traveling through the wars is important, most users will be the academic types and they usually come to query something that interest their field of study. The general categories that comes with the dataset must also be easily navigable, a user the is interested in financial stats and data does not care for the growth percentage of the population and it will be inconvenient for him to scroll through such data instead of being shown the relevant data for his research. So, I added another ability to view groups of information under pre-defined categories the user can choose from. Under each category, you can find plenty of visualized stats and data for different conflicts.

Propect Presentation
--------------------
https://drive.google.com/open?id=0B1cisIvB7e8pX2JNQjZrdDJBajdzY3NhRWV3Uk95VmVwSjI0

Contact
-------
Mail: Eli.Hundia@gmail.com
Web:  https://elihu.000webhostapp.com/
