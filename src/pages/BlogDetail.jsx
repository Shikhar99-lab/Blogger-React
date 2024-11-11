import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [post, setPost] = useState(null);
  const basePath = '/src/assets/';

  useEffect(() => {
    console.log("Blog ID from URL:", id);  // Log the ID from the URL

    const fetchPostById = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blogs');
        console.log("Fetched blogs data:", response.data); // Log the entire response data

        // Ensure ID consistency by converting both to strings
        const foundPost = response.data.find(post => post.id === id.toString());
        console.log("Found post:", foundPost); // Log the found post

        if (foundPost) {
          setPost(foundPost);
        } else {
          console.error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPostById();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>; // Show loading state while post is being fetched
  }

  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-red-500 text-[12px]'>{post.tag}</h3>
      <h3 className='text-[23px] font-bold'>{post.title}</h3>
      <div className='flex items-center mt-5'>
        <img
          src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
          className='w-[35px] rounded-full'
          alt="Author"
        />
        <div className='ml-2'>
          <h3 className='font-bold text-[12px]'>Tubeguruji</h3>
          <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
        </div>
      </div>
      <img src={post.image.startsWith('http') ? post.image : `${basePath}${post.image}`} className='rounded-2xl mt-5 mb-5 w-full' alt={post.title} />
      <p className='leading-9'>{post.desc}</p>
    </div>
  );
}

export default BlogDetail;