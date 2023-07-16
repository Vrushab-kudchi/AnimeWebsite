import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Anime() {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [character, setCharacter] = useState({});


  useEffect(() => {
   const getAnime = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
   };

    const getCharacter = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
      const data = await response.json();
      console.log(data)
    }
    getCharacter();
    getAnime();


  }, []);

  const { episodes, genres, rank, source, status, synopsis, title_english, popularity, year, aired, trailer } = anime;

 return (
  <div className="container mt-5">
    <div className="card">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={anime.images?.jpg?.large_image_url} alt={anime.title} className="card-img" style={{ objectFit: 'cover', height: '100%' }} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h1 className="card-title"><strong>Title</strong>: {anime.title}</h1>
            <h2 className="card-text"><strong>Title (English): </strong>{title_english}</h2>
            <h3 className="card-text"><strong>Episodes: </strong>{episodes}</h3>
            <h3 className="card-text"><strong>Genre:</strong> {genres?.map((genre) => genre.name).join(", ")}</h3>
            <h3 className="card-text"><strong>Rank: </strong>{rank}</h3>
            <h3 className="card-text"><strong>Source: </strong>{source}</h3>
            <h3 className="card-text"><strong>Popularity: </strong>{popularity}</h3>
            <h3 className="card-text"><strong>Aired:</strong> {aired?.string}</h3>
            <h3 className="card-text"><strong>Status: </strong>{status}</h3>
            <h3 className="card-text"><strong>Year:</strong> {year}</h3>
          </div>
        </div>
      </div>
    </div>
    <h1>Trailer</h1>
    {trailer && (
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={trailer.embed_url}
              title="Anime Trailer"
              allowFullScreen
              style={{ width: '100%', height: '600px' }} // Increased size of the trailer
            ></iframe>
          </div>
        </div>
      </div>
    )}
    <div className="mt-4">
      <h3><strong>Description</strong>:</h3>
      <p>{synopsis}</p>
    </div>
  </div>
);

}
