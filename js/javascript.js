
content = document.getElementById("fileContent").textContent;

raw_lines = content.split("\n");

movies = [];

class Movie {
	constructor(title, watchers, image, year) {
		this.title = title;
		this.watchers = watchers;
		this.image = image;
		this.year = year;
	}
}

for (i = 0; i < raw_lines.length; i++) {
	if (raw_lines[i] != "") {
		
		line = raw_lines[i].trim().split("|");
		
		title = line[0].trim();
		if (line.length > 1) {
			watchers = line[1].trim().split("-");
		} else {
			watchers = [];
		}
		
		xhReq = new XMLHttpRequest();
		// add year feature
		xhReq.open("GET", "http://www.omdbapi.com/?apikey=c9eb1bb2&t=" + title, false);
		xhReq.send(null);
		movieJson = JSON.parse(xhReq.responseText);
		
		image = movieJson.Poster;
		
		title = movieJson.Title;
		
		year = movieJson.Year;
		
		movie = new Movie(title, watchers, image, year);
		
		movies.push(movie);
	}
}

n = 0;

for (i = 0; i < movies.length; i++) {
	
	if (i % 6 == 0) {
		n++;
		row = document.createElement("div");
		row.id = "row"+n.toString();
		row.classList.add('row');
		document.getElementById("posters").appendChild(row);
	}
	column = document.createElement("div");
	column.classList.add('col-md-2');
	column.id = "col" + i.toString();
	document.getElementById("row"+n.toString()).appendChild(column);
	
	movie = document.createElement("div");
	movie.id = "div-" + movies[i].title;
	movie.classList.add('poster');
	image = document.createElement("img");
	image.src = movies[i].image;
	image.classList.add('image');
	
	// FIX IMAGE GREY ON THE BOTTOM (STRETCH)
	
	overlay = document.createElement("div");
	overlay.classList.add('overlay');
	overlay.id = "overlay-" + movies[i].title;
	posterText = document.createElement("div");
	posterText.classList.add('poster-text');
	posterText.innerHTML = movies[i].title;
	document.getElementById(column.id).appendChild(movie);
	document.getElementById(movie.id).appendChild(overlay);
	document.getElementById(movie.id).appendChild(posterText);
	document.getElementById(overlay.id).appendChild(image);

}

