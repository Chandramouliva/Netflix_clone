import React, { useState, useEffect } from "react"
import axios from "../axios/Axios" 
import "./Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const baseurl = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playeVars: {
            autoplay: 1,
        },
    }

    const handleClick = async (movie) => {
        console.log(movie);
        var movieName = movies.name || movie.original_title|| ""
        console.log(movieName, "movieName");
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            try{
                var ans = await movieTrailer(movieName)
                console.log(ans);
                const urlParams =new URLSearchParams( new URL(ans).search);
                setTrailerUrl( urlParams.get('v'))
            }
            catch(error){
                console.log(error);
            }
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>(
                    <img 
                        key={movie.id}
                        onClick = {() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseurl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} />
                 ) )}
            </div>
            {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row