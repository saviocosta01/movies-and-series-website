import { Movie2Svg } from "../../../assets/img-svg"
import { CardMovie } from "./style"
import imageGroup from '../../../assets/Group 27.png'
import imageGroupWhite from '../../../assets/Group 27 (1)white.png'
import { useContext } from "react"
import { DashboardContext } from "../../../providers/dashboardContext"

export const MoviesCard = ({movie, index}: any) => {

        const {addTaggedMovies} = useContext(DashboardContext)
    return(
        <CardMovie>
            <img src={movie.isTrending == true ? movie.thumbnail.trending.small : movie.thumbnail.regular.small} alt="" />
            <div className="div-content">
                <div>
                    <p>{movie.year}</p>
                    <p className="image-movie-svg"><Movie2Svg/>{movie.category}</p>
                    <p>{movie.rating}</p>
                </div>
                <h2>{movie.title}</h2>
            </div>
            <img src={movie.isBookmarked ? imageGroupWhite : imageGroup} alt="" className="image-group" onClick={() => addTaggedMovies(movie.id, index)}/>
        </CardMovie>
    )
}