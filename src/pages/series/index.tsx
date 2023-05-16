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
  ListSeries,
  SectionContent,
} from "./style";
import imageAvatar from "../../assets/image-avatar.png";
import { moviesAndSeries } from "../../data";
import imageGroup from "../../assets/Group 27.png";
import imageGroupWhite from "../../assets/Group 27 (1)white.png";
import { useContext, useState } from "react";
import { DashboardContext } from "../../providers/dashboardContext";
import { AsideComponent } from "../../components/aside";
import { DivSearch } from "../../components/search/style";
import { CardComponent } from "../../components/cards";

export const SeriesPage = () => {
  const { addTaggedMovies } = useContext(DashboardContext);

  const [search, setSeach] = useState<string>("");

  const series = moviesAndSeries.filter((serie) => {
    return serie.category == "TV Series";
  });
  const filteredSearchSeries = series.filter((serie) =>
    search == ""
      ? true
      : serie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <DashboardContainer>
      <AsideComponent/>
      <SectionContent>
      <DivSearch>
        <SearchSvg />
        <input
          type="text"
          placeholder="Search for TV series"
          onChange={(event) => setSeach(event.target.value)}
        />
      </DivSearch>
        {search ? (
          <h2 className="h2-search">{`Found ${filteredSearchSeries.length} for '${search}'`}</h2>
        ) : (
          <h2 className="h2-series">TV series</h2>
        )}
        <ListSeries>
          {filteredSearchSeries.map((serie, index) => {
            return (
              <CardComponent key={serie.id} array={serie} index={index}/>
            );
          })}
        </ListSeries>
      </SectionContent>
    </DashboardContainer>
  );
};
