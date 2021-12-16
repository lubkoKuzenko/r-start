
const SocialInfo = () => {
  return (
    <div className='social-info'>
      <div className="single-card">
        <div className="card-logo">
          <i className="fab fa-facebook-f fa-4x" style={{ color: 'white' }}></i>
        </div>
        <div className="card-info">
          <div className="card-info-post">
            <p className="title is-4 mx-auto">23k</p>
            <p className="subtitle is-6">POSTS</p>
          </div>
          <span></span>
          <div className="card-info-likes">
            <p className="title is-4">46k</p>
            <p className="subtitle is-6">LIKES</p>
          </div>
        </div>
      </div>

      <div className="single-card">
        <div className="card-logo twitter">
          <i className="fab fa-twitter fa-4x" style={{ color: 'white' }}></i>
        </div>
        <div className="card-info">
          <div className="card-info-post">
            <p className="title is-4 mx-auto">23k</p>
            <p className="subtitle is-6">POSTS</p>
          </div>
          <span></span>
          <div className="card-info-likes">
            <p className="title is-4">46k</p>
            <p className="subtitle is-6">LIKES</p>
          </div>
        </div>
      </div>

      <div className="single-card">
        <div className="card-logo linkedin">
          <i className="fab fa-linkedin fa-4x" style={{ color: 'white' }}></i>
        </div>
        <div className="card-info">
          <div className="card-info-post">
            <p className="title is-4 mx-auto">23k</p>
            <p className="subtitle is-6">POSTS</p>
          </div>
          <span></span>
          <div className="card-info-likes">
            <p className="title is-4">46k</p>
            <p className="subtitle is-6">LIKES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;
