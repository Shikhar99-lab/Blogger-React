import  { useState, useEffect } from 'react';
import Search from '../components/Search';
import IntroPost from '../components/IntroPost';
import Blogs from '../components/Blogs';
import axios from 'axios';

function Home() {
    const [firstPost, setFirstPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/blogs');
                setPosts(response.data);
                setFilteredPosts(response.data);  // Initially show all posts
                if (response.data.length > 0) {
                    setFirstPost(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching the posts:', error);
            }
        };
        fetchAllPosts();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            const filtered = posts.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.desc.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(posts);  // Show all posts if no search query
        }
    };

    return (
        <>
            <Search onSearch={handleSearch} />
            {firstPost && <IntroPost post={firstPost} />}
            <Blogs posts={filteredPosts} />
        </>
    );
}

export default Home;