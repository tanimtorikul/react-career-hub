import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  console.log(jobs, id);
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  return (
    <div>
      <h2 className="text-center text-3xl font-extrabold md:mt-12">Job Details</h2>
      <div className="grid gap-4 md:grid-cols-4 items-center md:mt-40">
        <div className="md:col-span-3">
        <h2 className="text-lg font-normal mb-6"><span className="text-xl font-extrabold">Job Description:</span> {job.job_description}</h2>
        <h2 className="text-lg font-normal mb-6"><span className="text-xl font-extrabold">Job Responsibility:</span> {job.job_responsibility}</h2>
        <h2 className="text-lg font-normal mb-6"><span className="text-xl font-extrabold">Educational Requirements: <br /></span> {job.educational_requirements}</h2>
        <h2 className="text-lg font-normal"><span className="text-xl font-extrabold">Experiences: <br /></span> {job.experiences}</h2>
        
        </div>
       <div>
       <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 w-full h-full rounded-lg py-8">
            <h2 className="pl-8 text-xl font-extrabold">Job Details</h2>
           <div className="flex justify-center mt-6 mb-6">
           <p className="border w-5/6  border-blue-200"></p>
           </div>
           <div className="pl-7">
            <h2 className="mb-4"><span className="font-bold">Salary:</span> {job.salary}(per month)</h2>
            <h2><span className="font-bold">Job Title: </span>{job.job_title}</h2>
           </div>
            <h2 className="pl-7 mt-7 text-xl font-extrabold">Contact Information</h2>
           <div className="flex justify-center mt-6 mb-6">
           <p className="border w-5/6  border-blue-200"></p>
           </div>
           <div className="pl-7">
            <h2 className="mb-4"><span className="font-bold">Phone:</span> {job.contact_information.phone}</h2>
            <h2 className="mb-4"><span className="font-bold">Email: </span>{job.contact_information.email}</h2>
            <h2><span className="font-bold">Address: </span>{job.location}</h2>
           </div>
            <div>
                
            </div>
        </div>
        <div className="flex justify-center mt-6">
        <button className="btn w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white">
              Apply Now
            </button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default JobDetails;
