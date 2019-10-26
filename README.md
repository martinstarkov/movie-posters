# Display your favorite movie posters
This small php application pulls movie titles from a text file (movies-list.txt, located in the resources folder) and displays the corresponding posters by sending requests to the http://www.omdbapi.com movie database API. Hover over a poster to see the title.
![github-movie-poster-website-picture](https://user-images.githubusercontent.com/5933654/67626022-b97a3c00-f83d-11e9-9a94-f5de0114c650.png)
### Note
Make sure to run the index.php file on a virtualhost (wampserver) to ensure that javascript can use the XMLHttpRequest() method for retrieving the API data.
