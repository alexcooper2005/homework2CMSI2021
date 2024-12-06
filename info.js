export default function Info({ name, data }) {
  if (!data || !name) {
    return <p>Enter any amiibo name and we will list its, Series, Game, Tail, and Type!!!</p>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p><b><i>Game Series: </i></b> {data.gameSeries}</p>
      <p><b><i>Amiibo Series: </i></b>  {data.amiiboSeries}</p>
      <p><b><i>Tail: </i></b>{data.tail || "N/A"}</p>
      <p><b><i>Type: </i></b> {data.type || "N/A"}</p>
      <img src={data.image} alt={`${data.name} amiibo`} />
    </div>
  );
}
