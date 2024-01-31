import Link from 'next/link'

function MovieList( { movieId = 100} ) {
    return (
        <>
            <h2>
                <Link href = "/movie/1">Movie 1</Link>
             </h2>
             <h2>
                <Link href = "/movie/2">Movie 2</Link>
             </h2>
             <h2>
                <Link href = {`/movie/${movieId}`}>Movie {movieId}</Link>
             </h2>
        </>
    )
}

export default MovieList