import axios from "axios";
import { useState, useEffect } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`,
      );

      setComments(res.data);
    };
    fetchData();
  }, []);

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <div>{renderedComments}</div>;
};

export default CommentList;
