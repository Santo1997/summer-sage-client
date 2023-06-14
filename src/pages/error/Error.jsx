import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title title="Error" />
      <div className="h-screen">
        <div className="container text-center mx-auto py-20 px-10">
          <img
            src="https://i.ibb.co/SfNY7Kj/162-1622413-4chan-404-pages-hd-png-download.png"
            className="w-full border border-sky-400 mb-5 rounded-md"
          />
          <button
            onClick={() => navigate("/")}
            className="btn rounded btn-primary bg-sky-500 border-sky-500 text-white"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </>
  );
};
export default Error;
