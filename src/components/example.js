const LatestPostsComponent = props => (
  <section>
    <div><h1>Latest posts</h1></div>
    <div>
      { props.posts.map(post => <PostPreview key={post.slug} post={post}/>) }
    </div>
  </section>
);