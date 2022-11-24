import React from 'react'
import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter()
    const article_id = router.query.id;
    return (
        <div>{article_id}</div>
    )
}

export default Blog
