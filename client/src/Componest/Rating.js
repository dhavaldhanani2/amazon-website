export default function Rating({ rating }) {
  return (
    <div className="Rating">
      {rating < 1 ? (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
        </>
      ) : rating < 2 ? (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
        </>
      ) : rating < 3 ? (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </>
      ) : rating < 4 ? (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </>
      ) : rating < 5 ? (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
          <i className="bi bi-star"></i>
        </>
      ) : (
        <>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </>
      )}
    </div>
  );
}