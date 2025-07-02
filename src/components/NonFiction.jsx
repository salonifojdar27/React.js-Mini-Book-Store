
import NonFictionData from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div>
      <h1 className="title">Non-Fiction Books</h1>

      <div className="books-container" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {/* Display all Non-Fiction books here */}
        {NonFictionData.map((el, i) => <BookCard author={el.author} price={el.price} title={el.title} year={el.year} img={el.img} />)}
      </div>
    </div>
  );
}
