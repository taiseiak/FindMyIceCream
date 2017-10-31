# Find my Ice Cream

Web application that locates where the user is and shows the nearest
ice cream shops.

## Author
Taisei Klasen taiseiklasen@gmail.com

## Implementation
The server is run on Flask, and the map is created by Leaflet and
MapBox. The html is Bootstrap based. The location searching and
geolocation is run on the Google maps API for places and reverse
geolocation.

## Address
On default, the map is focused on the address of the Hilyard House apartments. The
location will search for the nearest places of intrest in a 5000 meter
radius. The address and radius can be changed in the credentials.ini file.

## Chaingng the point of interest
The point of interest can be changed in the credentials file. On Default,
the web application will search for the nearest ice cream places. The