import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import Error from './Error'
import Loading from './Loading'

const fetchListPost = gql`
  query {
    posts {
      title
      slug
      createdAt
      excerpt
    }
  }
`

const ListPost = () => {
  const { loading, error, data } = useQuery(fetchListPost)

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <div className="container">
      <h1 className="my-4">Get List Post From GraphCMS</h1>
      {data?.posts.length <= 0 
        ? <h2>No Posts</h2> 
        : data?.posts.map(post => (
          <div className="card mt-4" key={post.slug}>
            <div className="card-body">
              <h4 className="card-title">
                <Link to={post.slug}>
                  {post.title}
                </Link>
              </h4>
              <div className="card-subtitle text-muted mb-2">
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
              <div className="card-text mb-2">{post.excerpt}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ListPost
