$.ajax({
  url: "http://www.omdbapi.com/?apikey=2c81e19a&s=lego",
  success: (results) => {
    // agar search nya ilang
    const movies = results.Search;
    let cards = "";
    movies.forEach((m) => {
      cards += `<div class="col-md-4 my-5">
        <div class="card">
          <img src="${m.Poster}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#movieDetailModal">Show Details</a>
          </div>
        </div>
      </div>`;
    });
    // cari elemen ... lalu isi html nya dengan cards
    $(".movie-container").html(cards);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
