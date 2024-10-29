import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import IntroPost from '../components/IntroPost';
import Footer from '../components/Footer';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import axios from 'axios';

function Home() {
    const [firstPost, setFirstPost] = useState(null);

    useEffect(() => {
        const fetchFirstPost = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs');
                if (response.data.length > 0) {
                    setFirstPost(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching the first post:', error);
            }
        };
        fetchFirstPost();
    }, []);

    return (
        <div> 
            <Header />
            <Search />
            {firstPost && <IntroPost post={firstPost} />}
            {/* <Blogs />
            <Footer /> */}
        </div>
    );
}

export default Home;
