import { Movie2Svg, PlaySvg } from "../../../assets/img-svg"
import { CardContent, CardTrending } from "./style"
import imageGroup from '../../../assets/Group 27.png'
import { useContext } from "react"
import { DashboardContext } from "../../../providers/dashboardContext"
import imageGroupWhite from '../../../assets/Group 27 (1)white.png'

export const MoviesTrending = ({movie, index}: any) => {
    const {addTaggedMovies} = useContext(DashboardContext)
    
    return(
        <CardTrending className="card-trending">
            <img src={movie.thumbnail.trending.small} alt="" />
            <CardContent className="card-trending-content">
            <div className="div-content">
                <div>
                    <p>{movie.year}</p>
                    <p className="image-category-card"><Movie2Svg/>{movie.category} </p>
                </div>
                <h2>{movie.title}</h2>
            </div>
            <h3>{movie.rating}</h3>
            </CardContent>
            <div className="div-play">
                <div>
                <PlaySvg/>
                <p>Play</p>
                </div>
            </div>
            
            
            <img src={movie.isBookmarked ? imageGroupWhite : imageGroup} alt="" className="image-group" onClick={() => addTaggedMovies(movie.id, index)}/>
        </CardTrending>
        
    )
}