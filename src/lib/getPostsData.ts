export const getPostsData = async () => {
    try {
        const res = await fetch('https://dummyjson.com/posts?limit=10');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        return data.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts from the API');
    }
};
