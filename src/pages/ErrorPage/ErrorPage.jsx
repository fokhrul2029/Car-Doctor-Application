import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div className="text-3xl">this is Error Page</div>
      <Link to="/" className="btn btn-gust">Back to home </Link>
    </div>
  );
}

export default ErrorPage;
