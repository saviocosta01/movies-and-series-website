import { createContext, useEffect, useState } from "react";
import { TChildren, TContext } from "./interfaces/dashboard.interface";
import { useNavigate } from "react-router-dom";
import { moviesAndSeries } from "../data";
import { toast } from "react-toastify";

export const DashboardContext = createContext<TContext>({} as TContext);

export const DashboardProvider = ({ children }: TChildren) => {
  const [page, setPage] = useState<string>("trending");
  const [listBookmarkedMovies, setListBookmarkedMovies] = useState<any>([]);
  const [listMarkedSeries, setListMarkedSeries] = useState<any>([]);
  const [isTagged, setIsTagged] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  const openMovies = () => {
    setPage("movies");
  };

  const openHome = () => {
    setPage("trending");
  };

  const openSeries = () => {
    setPage("series");
  };

  const openBookMarked = () => {
    setPage("bookmarked");
  };

  useEffect(() => {
    const taggedMovies = moviesAndSeries.filter((movie) => {
      return movie.isBookmarked == true && movie.category == "Movie";
    });
    const taggedSeries = moviesAndSeries.filter((serie) => {
      return serie.isBookmarked == true && serie.category == "TV Series";
    });

    setListBookmarkedMovies(taggedMovies);
    setListMarkedSeries(taggedSeries);
  }, []);

  const addTaggedMovies = (id: number, index: number) => {
    const newTagged = [...isTagged];
    newTagged[index] = !newTagged[index];
    setIsTagged(newTagged);

    const findMovie = moviesAndSeries.find((movie) => {
      return Number(movie.id) == Number(id);
    });

    const removeMovie = listBookmarkedMovies.filter((movie: any) => {
      return Number(movie.id) !== Number(id);
    });
    const removeSerie = listMarkedSeries.filter((serie: any) => {
      return Number(serie.id) !== Number(id);
    });

    if (findMovie?.isBookmarked == true && findMovie?.category == "TV Series") {
      setListMarkedSeries(removeSerie);
      findMovie!.isBookmarked = false;
      toast.error("unmarked series");
    } else if (findMovie?.category == "TV Series") {
      setListMarkedSeries([...listMarkedSeries, findMovie]);
      findMovie!.isBookmarked = true;
      toast.success("marked series");
    }

    if (findMovie?.isBookmarked == true && findMovie?.category == "Movie") {
      setListBookmarkedMovies(removeMovie);
      toast.error("movie unchecked");
      findMovie!.isBookmarked = false;
    } else if (findMovie?.category == "Movie") {
      if (listBookmarkedMovies.includes(findMovie)) {
        console.log("este filme ja foi marcado");
      }
      setListBookmarkedMovies([...listBookmarkedMovies, findMovie]);
      findMovie!.isBookmarked = true;
      toast.success("tagged movie");
    }
  };

  const removeTaggedMovie = (id: number, index: number) => {
    const newTagged = [...isTagged];
    newTagged[index] = !newTagged[index];
    setIsTagged(newTagged);

    const findMovie = moviesAndSeries.find((movie) => {
      return Number(movie.id) == Number(id);
    });
    const removeMovie = listBookmarkedMovies.filter((movie: any) => {
      return Number(movie.id) !== Number(id);
    });
    setListBookmarkedMovies(removeMovie);
    findMovie!.isBookmarked = false;
  };

  return (
    <DashboardContext.Provider
      value={{
        setPage,
        page,
        openMovies,
        openHome,
        openSeries,
        openBookMarked,
        setListBookmarkedMovies,
        listBookmarkedMovies,
        addTaggedMovies,
        removeTaggedMovie,
        setSearch,
        search,
        listMarkedSeries,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
