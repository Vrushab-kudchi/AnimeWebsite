import React, { useContext } from 'react';
import { Global } from '../context/global';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function CardsAdded() {
  const { popularAnime } = useContext(Global);

  return (
    <div className="row">
      {popularAnime.map((anime) =>
        anime.entry.map((entry) => (
          <div key={entry.mal_id} className="col-md-3 mb-4">
            <Link to={`/anime/${entry.mal_id}`}>
              <div className="card">
                <img
                  src={entry.images.jpg.image_url}
                  alt={entry.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{entry.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
