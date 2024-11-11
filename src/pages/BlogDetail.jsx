import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const basePath = '/src/assets/';

  useEffect(() => {
    const getPostById = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        console.log("Fetched data:", data);

        const foundPost = data.find((post) => post.id === parseInt(id, 10));
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        console.error("Error loading the post:", error);
        setError("Failed to load post");
      }
    };
    getPostById();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-red-500 text-[12px]'>{post.tag}</h3>
      <h3 className='text-[23px] font-bold'>{post.title}</h3>
      <div className='flex items-center mt-5'>
        <img
          src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
          className='w-[35px] rounded-full'
        />
        <div className='ml-2'>
          <h3 className='font-bold text-[12px]'>Tubeguruji</h3>
          <h3 className='text-gray-500 text-[10px]'>{post.date}</h3>
        </div>
      </div>
      <img src={post.image.startsWith('http') ? post.image : `${basePath}${post.image}`} className='rounded-2xl mt-5 mb-5 w-full' alt={post.title} />
      <p className='leading-9'>{post.desc}</p>
    </div>
  );
}

export default BlogDetail;