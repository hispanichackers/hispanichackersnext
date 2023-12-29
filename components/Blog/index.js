import Link from 'next/link';
import Image from 'next/image';
import Date from '../../assets/date';


export default function Blog({ allPostsData }) {
  return (
    <div id='blog'>
      <h2>Blog</h2>
      <hr />
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <p>
              <Date dateString={date} />
            </p>{' '}
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Image
        src='/static/images/hhatx.webp'
        alt='Hispanic Hacker Collage'
        width={800}
        height={533}
      />
    </div>
  );
}
