import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import { usePostsByIdData } from '../hooks/usePostsData';
import { useParams } from 'react-router-dom';

const PostDetails: React.FC = () => {
  const { id = '1' } = useParams();
  const { data, error, isLoading, isError } = usePostsByIdData(id);

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;
  return (
    <article className="message is-info">
      <h2>{data?.title}</h2>
      <div className="message-body">{data?.body}</div>
    </article>
  );
};

export default PostDetails;
