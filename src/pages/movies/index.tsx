import {
  BookMarkSvg,
  HomeSvg,
  LogoSvg,
  MovieSvg,
  SearchSvg,
  SerieSvg,
} from "../../assets/img-svg";
import {
  DashboardContainer,
  ListMovies,
  SectionContent,
} from "./style";
import imageAvatar from "../../assets/image-avatar.png";
import { moviesAndSeries } from "../../data";
import { MoviesCard } from "./moviesCard";
import { useState } from "react";
import { AsideComponent } from "../../components/aside";
import { DivSearch } from "../../components/search/style";
import { CardComponent } from "../../components/cards";

export const MoviesPage = () => {
  // const {setSearch, search} = useContext(DashboardContext)
  const [search, setSearch] = useState<string>("");

  const movies = moviesAndSeries.filter((movie) => {
    return movie.category == "Movie";
  });

  const filteredSearchMovies = movies.filter((movie) =>
    search == ""
      ? true
      : movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardContainer>
      <AsideComponent />
      <SectionContent>
      <DivSearch>
        <SearchSvg />
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(event) => setSearch(event.target.value)}
        />
      </DivSearch>
        {search ? (
          <h2 className="h2-search">{`Found ${filteredSearchMovies.length} results for '${search}'`}</h2>
        ) : (
          <h2 className="h2-movies">Movies</h2>
        )}
        <ListMovies>
          {filteredSearchMovies.map((movie, index) => {
            return <CardComponent key={movie.id} array={movie} index={index} />;
          })}
        </ListMovies>
      </SectionContent>
    </DashboardContainer>
  );
};
