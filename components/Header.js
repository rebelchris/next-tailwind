const Header = ({ menuItems: { menuItems } }) => {
  return (
    <nav className='flex flex-wrap items-center justify-between p-6 bg-blue-500 shadow-lg'>
      <ul className='flex items-center justify-end flex-grow w-full'>
        {menuItems.edges.map((item) => (
          <li key={item.node.path}>
            <a
              className='p-4 ml-2 text-white hover:underline'
              href={item.node.connectedNode.node.slug}
            >
              {item.node.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
