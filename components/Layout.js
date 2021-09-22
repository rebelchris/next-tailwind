import Header from './Header';

export default function Layout({ children, menu }) {
  return (
    <>
      <Header menuItems={menu} />
      <main>{children}</main>
    </>
  );
}
