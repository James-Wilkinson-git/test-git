import { Button, GridList } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard';
import getDragRaceGifs from '../../services/GiphyAPI';

function DragRaceGifs() {
  const [gifsData, setGifsData] = useState<any>([]);
  const [page, setPage] = useState(0);

  function loadMoreGifs() {
    setPage(page + 25);
  }

  useEffect(() => {
    getDragRaceGifs(page).then((data) =>
      setGifsData((prevGifsData) => {
        return [...prevGifsData, ...data];
      })
    );
  }, [page]);

  return (
    <GridList cols={3}>
      {gifsData.map((gif) => {
        return <DisplayCard gif={gif} key={gif.key} />;
      })}
      <Button onClick={loadMoreGifs}>Load More</Button>
    </GridList>
  );
}

export default DragRaceGifs;
