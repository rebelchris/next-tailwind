function Show(show) {
  return <h1>{show.title}</h1>;
}

export async function getStaticPaths() {
  const res = await fetch('https://api.jikan.moe/v3/top/anime/1');
  const shows = await res.json();
  const paths = shows.top.map((show) => {
    return {
      params: { id: show.mal_id.toString() },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.jikan.moe/v3/anime/${params.id}`);
  const show = await res.json();
  return { props: show };
}

export default Show;
