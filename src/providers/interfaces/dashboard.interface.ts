export type TChildren = {
  children: React.ReactNode;
};
type TThumbnail = {
  regular: {
    small: string;
    medium: string;
    large: string;
  };
  trending: {
    small: string;
    large: string;
  };
};

export type TTrending = {
  category: string;
  id: number;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: TThumbnail;
  title: string;
  year: number;
};

export type TContext = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  openMovies: () => void;
  openHome: () => void;
  openSeries: () => void;
  openBookMarked: () => void;
  setListBookmarkedMovies: React.Dispatch<React.SetStateAction<never[]>>;
  listBookmarkedMovies: TTrending[];
  addTaggedMovies: (id: number, index: number) => void;
  removeTaggedMovie: (id: number, index: number) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  listMarkedSeries: TTrending[];
};
