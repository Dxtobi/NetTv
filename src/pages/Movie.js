import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Movie() {
    const [data, setData] = useState(null)
    const data1 = useLocation();
    const nav = useNavigate();
    console.log(data, data1)
    
    const goBack = () => {
        nav('/')
    }
    useEffect(() => {
        setData(data1.state)
    }, []);

    
    if (data===null)
    {
        return <div className="single-post">Loading...</div>
    }
     return (
        <div className="single-post">
        
        <div className="image-holder">
            <img src={data.large_cover_image} className="post-img lg:w-[40%] " alt=''/>
            <div className="s-movie-title-holder-blur"></div>
            <div className="s-movie-title-holder">
                <div className="this-to-relative">
                    <div className="s-movie-title">{data.title}</div>
                    <div className="s-movie-title">Rating {data.rating}</div>
                </div>
                <div className="genre">
                        {
                            data.genres.map((gen, i) => (
                                <div key={i} className="genre-type">{gen}</div>
                            ))
                        }
                </div>
                    <div>Type: { data.type}</div>
                <br/>
                <div>Episodes: { data.episodes}</div>
                <a className='watch-link' href={`${ data.url}`}>Watch Now</a>
            </div>
        </div>
        <div className="s-text">
            <h1>{data.title}</h1>
            <br/>
            <h2>Synopsis:</h2>
            <div className="devider-1">
                <div className="d11"></div>
                <div className="d12"></div>
                <div className="d13"></div>
            </div>
            <p>
                {data.synopsis}
            </p>
            </div>
            <button className='watch-link' onClick={goBack}> Back </button>
    </div>
    );
}

export default Movie;