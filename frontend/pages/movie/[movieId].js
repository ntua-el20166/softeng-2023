import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

function MovieInfo() {
  // const popularMovies = useSelector(
  //   (state) => state.popularMovies.popularMovies
  // );
  const router = useRouter();
  const movieId = router.query.movieId;
  return <h1>Details about Movie {movieId}</h1>;
}

export default MovieInfo;
