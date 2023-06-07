import SectionTitle from "../../components/SectionTitle";
import "./Classes.css";

const Classes = () => {
  let img =
    "https://i.ibb.co/19cZpB9/360-F-46340033-r4r-ZUll7-MDn-SXM4n-S87qoy-AKEg-BGXIKE.jpg";
  return (
    <>
      <SectionTitle
        heading="Courses"
        subHeading="Our interactive teaching method engages you in the learning process so that you learn
communication skills and develop confidence quickly."
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-3">
        <div className="card card-compact shadow-xl mainHov">
          <figure>
            <img src={img} className="h-58 w-full imgHeight" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <button className="cldHov">Buy Now</button>
        </div>
        <div className="card card-compact shadow-xl mainHov">
          <figure>
            <img src={img} className="h-58 w-full imgHeight" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <button className="cldHov">Buy Now</button>
        </div>
        <div className="card card-compact shadow-xl mainHov">
          <figure>
            <img src={img} className="h-58 w-full imgHeight" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <button className="cldHov">Buy Now</button>
        </div>
        <div className="card card-compact shadow-xl mainHov">
          <figure>
            <img src={img} className="h-58 w-full imgHeight" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <button className="cldHov">Buy Now</button>
        </div>
        <div className="card card-compact shadow-xl mainHov">
          <figure>
            <img src={img} className="h-58 w-full imgHeight" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <button className="cldHov">Buy Now</button>
        </div>
        <div className="card card-compact shadow-xl mainHov">
          <figure>
            <img src={img} className="h-58 w-full imgHeight" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <button className="cldHov">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Classes;
