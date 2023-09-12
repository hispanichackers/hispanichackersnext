import { getAllPostIds, getPostData } from '../../assets/posts';
import Link from 'next/link';
import Date from '../../assets/date';


export default function id({ postData }) {
  return (
    <>
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
    </>
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
