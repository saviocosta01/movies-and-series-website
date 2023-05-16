import { SearchSvg, Movie2Svg } from "../../assets/img-svg";
import {
  DashboardContainer,
  SectionContent,
  ListTrending,
  ListRecommendeds,
  ListMoviesSearch,
  CardMoviesSearch,
} from "./style";
import { moviesAndSeries } from "../../data";
import { MoviesTrending } from "./moviesTrending";
import { useContext, useState } from "react";
import imageGroup from "../../assets/Group 27.png";
import imageGroupWhite from "../../assets/Group 27 (1)white.png";
import { DashboardContext } from "../../providers/dashboardContext";
import { AsideComponent } from "../../components/aside";
import { DivSearch } from "../../components/search/style";
import { CardComponent } from "../../components/cards";

export const TrendingPage = () => {
  const { addTaggedMovies } = useContext(DashboardContext);

  const trending = moviesAndSeries.slice(0, 5);
  const recommendeds = moviesAndSeries.slice(5, moviesAndSeries.length);

  const [search, setSearch] = useState<string>("");

  const filterMaoviesAndSeries = moviesAndSeries.filter(
    (movie) =>
      search && movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardContainer>
      <AsideComponent />

      <SectionContent>
        <DivSearch>
          <SearchSvg />
          <input
            type="text"
            placeholder="Search for movies or TV series"
            onChange={(event) => setSearch(event.target.value)}
          />
        </DivSearch>
        {search ? (
          <div>
            <h2 className="h2-search">{`Found ${filterMaoviesAndSeries.length} results for '${search}'`}</h2>
            <ListMoviesSearch>
              {filterMaoviesAndSeries.map((movie, index) => {
                return (
                  <CardComponent key={movie.id} array={movie} index={index} />
                );
              })}
            </ListMoviesSearch>
          </div>
        ) : (
          <div className="container">
            <h2 className="h2-trending">Trending</h2>
            <ListTrending className="list-trending">
              {trending.map((movie, index) => {
                return (
                  <MoviesTrending key={movie.id} movie={movie} index={index} />
                );
              })}
            </ListTrending>
            <h2 className="h2-recomendeds">Recommended for you</h2>
            <ListRecommendeds>
              {recommendeds.map((movie, index) => {
                return (
                  <CardComponent
                    key={movie.title}
                    array={movie}
                    index={index}
                  />
                );
              })}
            </ListRecommendeds>
          </div>
        )}
      </SectionContent>
    </DashboardContainer>
  );
};

/* <img
                    src={
                      movie.isTrending == true
                        ? movie.thumbnail.trending?.small
                        : movie.thumbnail.regular.small
                    }
                    alt=""
                  />
                  <div>
                    <p>{movie.year}</p>
                    <p className="image-category-card">
                      <Movie2Svg />
                      {movie.category}
                    </p>
                    <p>{movie.rating}</p>
                  </div>
                  <h2>{movie.title}</h2>
                  <img
                    src={movie.isBookmarked ? imageGroupWhite : imageGroup}
                    alt=""
                    className="image-group"
                    onClick={() => addTaggedMovies(movie.id, index)}
                  />
                </CardMoviesSearch> */
