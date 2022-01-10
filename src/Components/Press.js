

const Press = () => {
    return (
        <div id="press-comments" class="col-md-6 wow animated fadeInRight press-comments" data-wow-delay=".2s">
              <h1>In The Press</h1>
              <h5>What media say about us</h5>
                  <div id="carouselExampleSlidesOnly" class="carousel carousel-media slide" data-bs-ride="carousel">
                    <div class="carousel-inner carousel-presentation">
                      <div class="carousel-item active">
                        <div class="card">
                          <div class="card-body">
                            <blockquote class="blockquote mb-0">
                              <p>"Some of the finest designs using the higest quality supplies on the market."</p>
                              <footer class="blockquote-footer">Rolling Stone´s Magazine <cite title="Source Title">National Design Awadrs 2020</cite></footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="card">
                          <div class="card-body">
                            <blockquote class="blockquote mb-0">
                              <p>"Great service. Recommend if you have no idea what you are looking for - staff will help and find the best option. "</p>
                              <footer class="blockquote-footer">New York Times<cite title="Source Title"> Recomendation of the month</cite></footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
    )
}

export default Press;