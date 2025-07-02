
import fictionData from "../fiction.json"
import BookCard from "./BookCard"

export default function Fiction() {
  return (
    <div>
      <h1 className="title">Fictional Books</h1>

      <div
        className="books-container"style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {/* Map all Fictional Books here */}
        {fictionData.map((el, i) => <BookCard author={el.author} img={el.img} price={el.price} title={el.title} year={el.year} />)}
      </div>
    </div>
  );
}
