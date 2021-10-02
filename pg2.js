//Convert time format
const formatElapsedSeconds = (elapsedSeconds) => {
    const hours = parseInt(elapsedSeconds / 3600);
    const minutes = parseInt((elapsedSeconds / 60) % 60);
    const seconds = parseInt(elapsedSeconds % 60);
    return `${ hours }:${ minutes }:${ seconds }`;
  }