import PostImage from "components/post/PostWithImage";
import PostNOImage from "components/post/PostNoImage";
const Forum = () => {
  return (
    <>
      <div>
        <PostImage />
      </div>
      <div>
        <PostNOImage />
      </div>
    </>
  );
};

export default Forum;
