import { AiFillBank, AiFillCaretRight } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const Extra = () => {
  let img =
    "https://i.ibb.co/Ctj60Pt/cowomen-n964uuel-NJY-unsplash-796x531.jpg";
  return (
    <>
      <SectionTitle heading="Ourselves"></SectionTitle>

      <div className="grid grid-cols-3 ">
        <div className="card bg-slate-700 text-accent rounded-none ">
          <figure>
            <img src={img} />
          </figure>
          <div className="grid grid-cols-3 p-10 pb-2">
            <AiFillBank size={70} />
            <div className="col-span-2">
              <h2 className="card-title">Come And Visit Us</h2>
              <p>359 Van Brunt St, Brooklyn, NY 11231, USA</p>
            </div>
          </div>
          <div className="grid grid-cols-3 p-10 pt-2">
            <FaMobileAlt size={70} />
            <div className="col-span-2">
              <h2 className="card-title">Book A Free Lesson</h2>
              <p>
                <span>+880 1234567894</span>
                <br />
                <span>+880 9876543215</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 card-body relative">
          <h2 className="card-title text-3xl">
            Scuola New York English School
          </h2>
          <h2 className="">36 W 138th St, New York, NY, 10037</h2>

          <div className="my-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            eveniet inventore aperiam repellendus quaerat provident
            necessitatibus, ipsa non eligendi sed eaque aut velit ducimus nisi
            odit maiores dignissimos accusantium, sunt cupiditate maxime dolorem
            repellat, voluptate nostrum et! Doloribus atque, esse quasi, iure
            perspiciatis et ipsum expedita qui eos, aut ab.
          </div>
          <ul className="grid grid-cols-2 text-lg">
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> AiFillCaretRight
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> Outside Seating Area
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> Ample Free Parking Available
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> Free Wi-Fi Access
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> Student Lounge
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> Dedicated Teachers
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> Easy Transport
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight /> Friendly
            </li>
          </ul>
          <h1 className="w-full py-5 text-center rounded-none uppercase text-xl text-accent bg-slate-700 absolute bottom-0 right-0">
            Visit Us
          </h1>
        </div>
      </div>
    </>
  );
};

export default Extra;
