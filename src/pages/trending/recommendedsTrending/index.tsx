import { Movie2Svg } from "../../../assets/img-svg"
import { CardRecommendeds } from "./style"
import imageGroup from '../../../assets/Group 27.png'
import imageGroupWhite from '../../../assets/Group 27 (1)white.png'
import { useContext } from "react"
import { DashboardContext } from "../../../providers/dashboardContext"


export const RecommendedsTrending = ({movie, index}: any) => {
    const {addTaggedMovies} = useContext(DashboardContext)
    return(
        <CardRecommendeds>
            <img src={movie.thumbnail.regular.small} alt="" />
            <div>
                <p>{movie.year}</p>
                <p className="image-category-card"><Movie2Svg/>{movie.category}</p>
                <p>{movie.rating}</p>
            </div>
            <h2>{movie.title}</h2>
            <img src={movie.isBookmarked ? imageGroupWhite : imageGroup} alt="" className="image-group" onClick={() => addTaggedMovies(movie.id, index)}/>
        </CardRecommendeds>
    )
}