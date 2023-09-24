const Banner = () => {
    return (
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="p-6 font-semibold text-center md:text-start">
          <div className="md:text-8xl text-4xl mb-6">
            <h2>One Step</h2>
            <h2>Closer To Your</h2>
            <h2>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
                Dream Job
              </span>
            </h2>
          </div>
          <p className="mb-8">
            Explore thousands of job opportunities with all the <br /> information
            you need. Its your future. Come find it. Manage all <br />
            your job application from start to finish.
          </p>
          <a className="btn bg-gradient-to-r from-blue-400 to-purple-500 text-white">
            Get Started
          </a>
        </div>
        <div>
          <img src="user.png" alt="" />
        </div>
      </div>
    );
  };
  
  export default Banner;
  