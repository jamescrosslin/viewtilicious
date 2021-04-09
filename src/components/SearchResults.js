import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import Loading from "./Loading";

function SearchResults({ fetchPics }) {
  const { query } = useParams();
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleFetch() {
      await setLoading(() => true);
      const searchTerms = query.split(/[^\w\d]/).join("+");
      const photo = await fetchPics(searchTerms);
      await setPhotos(() => photo);
      await setLoading(() => false);
    }

    handleFetch();
  }, [query, fetchPics]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Gallery data={photos}>
      <h2>Results</h2>
    </Gallery>
  );
}

export default SearchResults;
