import { getAllPostIds, getPostData } from '../../assets/posts';
import Link from 'next/link';
import styled from 'styled-components';
import Date from '../../assets/date';

const PostContainer = styled.div`
  width: 50%;
  margin: 1rem auto;
  text-align: left;
  h1 {
    text-decoration: underline;
  }
`;

export default function id({ postData }) {
  return (
    <PostContainer>
      <h2>{postData.title}</h2>
      <h6>
        <Date dateString={postData.date} />
      </h6>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <hr />
      <Link href='/blog'>
        <a>← Back to blog</a>
      </Link>
    </PostContainer>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
