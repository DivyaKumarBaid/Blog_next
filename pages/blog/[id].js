import React from 'react'
import { useRouter } from 'next/router';
import { Md } from '../../src/components/BlogCard/MicroBlog';
import useFetch from '../../src/utils/useFetch'
import { useThemeToggle, useThemeValue } from '../../src/utils/Theme';

const Blog = (props) => {

    const theme = useThemeValue(); // use the providers value of the useThemeValue custom hook

    const router = useRouter()
    const article_id = router.query.id;
    const { data, error, isPending } = useFetch(`https://devblogs2022.herokuapp.com/blog/${article_id}`)

    const mode = theme ? "" : "dark"

    const error_div = error && <h2 className="Loading">{error}</h2>

    const loading_div = isPending && <h2 className="Loading">Loading...</h2>

    const blog_div = !isPending && blog_con(data, mode)

    return (
        <div className={`App ${theme ? "" : "dark"}`}>
            <div className='container'>
                {error_div}
                {loading_div}
                {blog_div}
            </div>
        </div>
    )
}

function blog_con(data, mode) {
    const bodySplit = data.body.split('<br>')
    const bodytry = bodySplit.map((line) => {
        return (
            <p>{<Md text={line} />}</p>
        )
    })

    const styles = {
        backgroundImage: `url(${data.image})`,
    }
    return (
        <div className={`App ${mode}`}>
            <div className={`BlogContainer ${mode}`}>
                <div className="coverimg" style={styles}>
                </div>
                <div className="BlogContent">
                    <div className="Blogheader">
                        <h3>{data.title}</h3>
                        <div className='Blog-des'>
                            <h5 className='Name'>By {data.author}</h5>
                            <h6 className='Date'>{data.date}</h6>
                        </div>
                    </div>
                    <div className="BlogBody">

                        <article className='article-body'>
                            {bodytry}
                        </article>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
