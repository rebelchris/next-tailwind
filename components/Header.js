import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({ menuItems: { menuItems } }) => {
  const router = useRouter();

  return (
    <nav className='flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg'>
      <ul className='flex items-center justify-end flex-grow w-full'>
        {menuItems.edges.map((item) => (
          <li key={item.node.path}>
            <Link href={item.node.connectedNode.node.slug}>
              <a
                className={`cursor-pointer p-4 ml-2 text-white ${
                  router.asPath === `/${item.node.connectedNode.node.slug}`
                    ? 'underline'
                    : ' hover:underline'
                }`}
              >
                {item.node.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
