import React, {useEffect} from 'react'
import styles from "./HomePage.module.css"
import Row from "../Components/Row"
import requests from  "../Requests/requests"
import Banner from "../Components/Banner"
import Nav from "../Components/Nav"


function HomePage() {
    return (
        <div className = {styles.homePage}>
            <Nav />
            <Banner />
            <Row 
                title="NETFLIX ORIGNALS" 
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title="Trending Now" 
                fetchUrl={requests.fetchTrending} 
            />
            <Row 
                title="Top Rated" 
                fetchUrl={requests.fetchTopRated} 
            />
            <Row 
                title="Action Movies" 
                fetchUrl={requests.fetchActionMovies} 
            />
            <Row 
                title="Comedy Movies" 
                fetchUrl={requests.fetchComedyMovies} 
            />
            <Row 
                title="Horror  Movies" 
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title="Romance Movies" 
                fetchUrl={requests.fetchRomanceMovies} 
            />
            <Row 
                title="Documentaries" 
                fetchUrl={requests.fetchDocumentaries} 
            />
        </div>
    )
}

export default HomePage
