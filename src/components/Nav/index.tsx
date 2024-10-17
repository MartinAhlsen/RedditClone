import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full pt-5">
      <ul className="flex justify-evenly">
        <li>
          <Link href="/">Page</Link>
        </li>
        <li>
          <Link href="/landingpage">Landingpage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
