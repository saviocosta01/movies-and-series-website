import { useContext } from 'react'
import imageGroupWhite from '../../assets/Group 27 (1)white.png'
import imageGroup from '../../assets/Group 27.png'
import { Movie2Svg, PlaySvg, SerieSvg2 } from '../../assets/img-svg'
import { CardRecommendeds } from './style'
import { DashboardContext } from '../../providers/dashboardContext'


export const CardComponent = ({array, index}: any) => {
    const {addTaggedMovies} = useContext(DashboardContext)
    return( 
        <CardRecommendeds className='card-container'>
            <img src={array.isTrending == true ? array.thumbnail.trending.small : array.thumbnail.regular.small} alt="" className='image-card'/>
            <div>
                <p>{array.year}</p>
                <p className="image-category-card">{array.category == 'Movie' ? <Movie2Svg/> : <SerieSvg2/>}{array.category}</p>
                <p>{array.rating}</p>
            </div>
            <h2>{array.title}</h2>
            <div className="div-play-cards">
                <div>
                <PlaySvg/>
                <p>Play</p>
                </div>
            </div>
            <img src={array.isBookmarked ? imageGroupWhite : imageGroup} alt="" className="image-group" onClick={() => addTaggedMovies(array.id, index)}/>
        </CardRecommendeds>
    )   
}