import {
  BookMarkSvg,
  HomeSvg,
  LogoSvg,
  MovieSvg,
  SearchSvg,
  SerieSvg,
  SerieSvg2,
} from "../../assets/img-svg";
import {
  DashboardContainer,
  ListTaggedMovies,
  SectionContent,
} from "./style";
import imageAvatar from "../../assets/image-avatar.png";
import { useContext, useState } from "react";
import { DashboardContext } from "../../providers/dashboardContext";
import imageGroupWhite from "../../assets/Group 27 (1)white.png";
import { AsideComponent } from "../../components/aside";
import { DivSearch } from "../../components/search/style";
import { CardComponent } from "../../components/cards";

export const BookMarkedPage = () => {
  const { listBookmarkedMovies, removeTaggedMovie, listMarkedSeries } =
    useContext(DashboardContext);
  const [search, setSearch] = useState<string>("");

  const newArray = [...listBookmarkedMovies, ...listMarkedSeries];
  console.log(newArray);

  const filteredBookMoviesSearch = newArray.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardContainer>
      <AsideComponent />
      <SectionContent>
        <DivSearch>
          <SearchSvg />
          <input
            type="text"
            placeholder="Search for bookmarked shows"
            onChange={(event) => setSearch(event.target.value)}
          />
        </DivSearch>
        {search ? (
          <>
            <h2 className="h2-search">{`Found ${filteredBookMoviesSearch.length} for '${search}'`}</h2>
            <ListTaggedMovies>
              {filteredBookMoviesSearch.map((movie, index) => {
                return (
                  <CardComponent
                    key={movie.title}
                    array={movie}
                    index={index}
                  />
                );
              })}
            </ListTaggedMovies>
          </>
        ) : (
          <>
            <h2 className="h2-movies">Bookmarked Movies</h2>

            <ListTaggedMovies>
              {listBookmarkedMovies.map((movie, index) => {
                return (
                  <CardComponent key={movie.id} array={movie} index={index} />
                );
              })}
            </ListTaggedMovies>
            <h2 className="h2-series">Bookmarked TV Series</h2>
            <ListTaggedMovies>
              {listMarkedSeries.map((serie, index) => {
                return (
                  <CardComponent key={serie.id} array={serie} index={index} />
                );
              })}
            </ListTaggedMovies>
          </>
        )}
      </SectionContent>
    </DashboardContainer>
  );
};
