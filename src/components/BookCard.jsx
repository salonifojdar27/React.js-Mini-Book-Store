

export default function BookCard(props) {
  return (
    <div data-testid="book-card" className="book-card">
      <img className="card-img" src={props.img} alt={""} />
      <b>
        <div data-testid="book-card-title" className="card-title">
          {props.title}
        </div>
         <span className="card-year">{props.year}</span>
      </b>
      <div data-testid="book-card-author" className="card-author">{props.author}</div>
      <div data-testid="book-card-price" className="card-price">{props.price}</div>
    </div>
  );
}
