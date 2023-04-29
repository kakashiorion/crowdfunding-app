import PostCell from 'src/components/Admin/Post/PostCell'

type PostPageProps = {
  id: number
}

const PostPage = ({ id }: PostPageProps) => {
  return <PostCell id={id} />
}

export default PostPage
