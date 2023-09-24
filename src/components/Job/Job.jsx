import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl py-10 md:text-start text-center">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-extrabold">{job_title}</h2>
        <p className="text-xl font-semibold text-[#757575] mb-4">
          {company_name}
        </p>
        <div className="flex gap-4 mb-4 md:justify-start justify-center">
          <button className="px-5 text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-6 mb-4">
          <h2 className="flex gap-2">
            <MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>
            {location}
          </h2>
          <h2 className="flex gap-2">
            <PiCurrencyDollarLight className="text-2xl"></PiCurrencyDollarLight>
            {salary}
          </h2>
        </div>
        <div className="card-actions flex md:justify-start justify-center">
          <Link to={`/job/${id}`}>
            <button className="btn bg-gradient-to-r from-blue-400 to-purple-500 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
