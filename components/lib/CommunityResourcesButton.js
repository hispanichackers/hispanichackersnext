import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
  margin: 3rem auto;
  text-align: center;
  display: block;
  a {
    color: ${({ theme }) => theme.linkUnderline};
    &:hover {
      color: ${({ theme }) => theme.fontColor};
    }
  }
`;

export default function CommunityResourcesButton() {
  return (
    <Button>
      <Link href='/contact'>Community Resources</Link>
    </Button>
  );
}
