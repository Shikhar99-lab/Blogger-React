import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Blogs({ posts }) {
  const navigate = useNavigate();
  const basePath = '/src/assets/';

  const categories = ['All', ...new Set(posts.map(post => post.cat))];
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredPosts = activeIndex === 0 ? posts : posts.filter(post => post.cat === categories[activeIndex]);

  return (
    <>
      <div className="flex gap-10 justify-center mt-5">
        {categories.map((category, index) => (
          <ul
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${index === activeIndex ? 'font-bold bg-blue-500 text-white rounded-full p-3 cursor-pointer' : 'hover:font-bold hover:bg-blue-500 hover:text-white hover:rounded-full p-3 cursor-pointer transition-all duration-300 ease-in-out'}`}
          >
            <li>{category}</li>
          </ul>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 px-10 md:px-15 lg:px-32">
        {filteredPosts.map((item) => (
          <div key={item.id} className="m-4 cursor-pointer" onClick={() => navigate('blog-detail/' + item.id)}>
            <img
              src={item.image.startsWith('http') ? item.image : `${basePath}${item.image}`}
              className="w-full rounded-2xl object-cover h-[200px]"
            />
            <h3 className="text-red-500 mt-3">{item.tag}</h3>
            <h3 className="font-bold mt-3">{item.title}</h3>
            <h3 className="line-clamp-3 text-gray-400 mt-3">{item.excerpt}</h3>
            <div className="flex items-center mt-5">
              <img
                src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
                className="w-[35px] rounded-full"
              />
              <div className="ml-2">
                <h3 className="font-bold text-[12px]">Tubeguruji</h3>
                <h3 className="text-gray-500 text-[10px]">24 Sept 2024</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
