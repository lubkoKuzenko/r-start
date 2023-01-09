import { Link } from 'react-router-dom';
import { IPost } from '../interfaces';

type Props = {
  post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <article className="message is-info">
      <div className="message-header">
        <Link to={`${post.id}`}>{post.title}</Link>
      </div>
      <div className="message-body">{post.body}</div>
    </article>
  );
};

export default Post;
