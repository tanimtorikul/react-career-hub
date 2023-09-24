const Category = ({ jobCategory }) => {
  const { logo, availability, category_name } = jobCategory;
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg md:p-10 p-4 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 mt-8">
      <div className="bg-blue-200 w-[70px] p-4 flex ">
      <img src={logo} alt="" />
      </div>
      <div class="py-4">
        <div class="font-bold text-xl mb-2">{category_name}</div>
        <p class="text-gray-700 text-base">{availability}</p>
      </div>
    </div>
  );
};

export default Category;
