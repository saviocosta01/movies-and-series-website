import { DashboardContext } from "../../providers/dashboardContext"
import { BookMarkedPage } from "../bookmarkedShows"
import { MoviesPage } from "../movies"
import { SeriesPage } from "../series"
import { TrendingPage } from "../trending"
import {useContext} from 'react'

export const DashboardPage = () => {
    const {page} = useContext(DashboardContext)
    let newPage = <TrendingPage />

    if(page == 'trending'){
        newPage = <TrendingPage />
    }
    else if(page == 'movies'){
        newPage = <MoviesPage />
    }
    else if(page == 'series'){
        newPage = <SeriesPage/>
    }
    else if(page == 'bookmarked'){
        newPage = <BookMarkedPage/>
    }

    
    return(
        newPage
    )
}