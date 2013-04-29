#! /bin/bash

# mongoimport --db potholesdata --collection potholes --type csv --headerline --file osd-bike-racks/data/Bike_Racks.csv

# mongoimport --db potholesdata --collection potholes --type csv --headerline --file data/311_Service_Requests_-_Pot_Holes_Reported.csv

mongo dataclean.js
