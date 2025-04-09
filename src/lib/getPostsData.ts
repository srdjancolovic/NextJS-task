export const getPostsData = async () => {
    //Added limit here so I only get 10 items for demonstration
    const res = await fetch('https://dummyjson.com/posts?limit=10');
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data.posts;
};
