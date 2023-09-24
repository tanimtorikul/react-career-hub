import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div>
      <div className="text-center mb-8 mt-8">
        <h2 className="text-5xl font-extrabold mb-4">
          Featured Jobs
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 justify-between">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
       
      </div>
      <div className={dataLength === jobs.length ? 'hidden' : 'flex justify-center mt-10'}>
        <button onClick={()=> setDataLength(jobs.length)} className="btn bg-gradient-to-r from-blue-400 to-purple-500 text-white">Show All Jobs</button>
        </div>
    </div>
    
  );
};

export default FeaturedJobs;
