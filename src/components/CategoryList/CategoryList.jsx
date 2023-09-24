import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [jobCategories, setJobCategories] = useState([]);
    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJobCategories(data))
    }, [])
    console.log(jobCategories);
    return (
        <div>
            <h2 className="text-5xl font-extrabold mb-4 text-center mt-32">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
            {
                jobCategories.map(jobCategory => <Category key={jobCategory.id} jobCategory={jobCategory}></Category>)
            }
            </div>
        </div>
    );
};

export default CategoryList;