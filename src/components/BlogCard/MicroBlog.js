import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useThemeValue } from '../../utils/Theme'



export function MicroBlog() {

  const theme = useThemeValue(); // use the providers value of the useThemeValue custom hook


  const [data, setData] = React.useState([])
  const [isPending, setPending] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch(`https://devblogs2022.herokuapp.com/blog/?limit=10`)
      .then(res => {
        if (!res === 200 || !res === 201) {
          throw Error('Could not fetch the data form the servre');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setPending(false);
          setError(err.message);
        }
      })
  }, [])

  const mode = theme ? "" : "dark"

  const error_div = error && <h2 className="Loading">{error}</h2>
  const loading_div = isPending && <h2 className="Loading">Loading...</h2>
  const microblog_div = (!isPending && data != null) ? data.map(blog => {
    return micro(blog, mode)
  }) : ''


  return (
    <div className='container'>
      {error_div}
      {loading_div}
      {microblog_div}
    </div>
  )
}

function micro(data, mode) {
  let likes = (data.liked_by).length
  console.log(likes)
  return (
    <Link href={`/blog/${data.id}`} className="container Micro">
      <div className={`MicroBlog  ${mode}`}>
        <div className="content-container">
          <div className='MicroBlog-top'>
            <h5 className='Name'>{data.author}</h5>
            <h6 className='Date'>{data.date}</h6>
          </div>
          <div className="microarticle">
            <h2 className='MicroBlog-title'>{data.title}</h2>
            <div className="microcontent">
              <article className='mircroarticle-body'>
                {<Md text={data.body} />}
              </article>
            </div>
          </div>
          <div className="likes">
            <AiFillHeart /> {likes}
          </div>
          <div className="tags">
            {data.tags.map((tag, idx) => <h5 key={idx} className="tagContent">{tag}</h5>)}
          </div>
        </div>
        <img src={data.image} alt="img" />
      </div>
    </Link >
  )
}

export const Md = ({ text }) => {
  return (
    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
      children={text}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              // eslint-disable-next-line react/no-children-prop
              children={String(children).replace(/\n$/, '')}
              style={dark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    />
  )
}

