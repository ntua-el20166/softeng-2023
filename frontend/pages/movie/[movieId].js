import { useRouter } from "next/router";

function MovieInfo() {
  const router = useRouter();
  const movieId = router.query.movieId;
  return <h1>Details about Movie {movieId}</h1>;
}

export default MovieInfo;
