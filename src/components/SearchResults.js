/* Dependency imports */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* Component imports */
import Gallery from "./Gallery";
import Loading from "./Loading";

function SearchResults({ fetchPics }) {
  const { query } = useParams();
  const [photos, setPhotos] = useState(null);
  /* isLoading state keeps track of if data fetching,
     starts at true to prevent jerky page render */
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /**
     * @function handleFetch
     * @description controls isLoading and photos states to
     *    appropriately render resources
     */
    async function handleFetch() {
      await setIsLoading(true);
      const photo = await fetchPics(query);
      await setPhotos(photo);
      setIsLoading(false);
    }

    handleFetch();
  }, [query, fetchPics]);

  // if data fetch has not completed, Loading component renders
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Gallery data={photos}>
      <h2>Results</h2>
    </Gallery>
  );
}

export default SearchResults;
