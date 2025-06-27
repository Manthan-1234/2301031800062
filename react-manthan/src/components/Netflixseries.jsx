import seriesData from "../api/seriesData.json"
 const Netflixseries = () => {
    return (
        < ul style={{ padding: 0, margin: 0, listStyle: "none" }} >
       { seriesData.map((curElem) => {
        return(
            <li key={curElem.id}>
                <div style={{ color: 'black', backgroundColor: 'white',padding:'20px', fontSize: '18px'}}>
                    <div style={{ borderRadius: "15px" }}>
                        <img src={curElem.img_url} width="40%" height="40%" />
                    </div>
                    <h2>Name:{curElem.name}</h2>
                    <h3>Rating:{curElem.rating}</h3>
                    <p>Summary:{curElem.description}</p>
                    <p>Genre:{curElem.genre}</p>
                    <p>Cast:{curElem.cast}</p>
                    <a href={curElem.watch_url} target="_blank">
                    <button>Watch Now</button></a>
                </div>
            </li>);})}
    
      </ul >
  );
}
export default Netflixseries;

