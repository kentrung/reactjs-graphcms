import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Error from './Error'
import Loading from './Loading'

const PostDetail = () => {
  const { slug } = useParams()

  const fetchPostDetailBySlug = gql`
    query ($slug: String) {
      post(where: {slug: $slug}) {
        title
        createdAt
        content {
          html
        }
      }
    }
  `
  const { loading, error, data } = useQuery(fetchPostDetailBySlug, {variables: {slug: slug}})

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <div className='container'>
      <div className='my-4'>
        <Link to='/' className='btn btn-outline-secondary'>
          Go Back
        </Link>
      </div>
      <h1>{data.post.title}</h1>
      <p className='text-muted'>{new Date(data.post.createdAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{__html: data.post.content.html}}></div>
    </div>
  )
}

export default PostDetail
