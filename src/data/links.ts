interface LinksProps {
  pathname: string;
  path: string;
}

const links: LinksProps[] = [
  {
    pathname: "Home",
    path: "/"
  },
  {
    pathname: "New Movies",
    path: "/new-movies"
  },
  {
    pathname: "Top Movies",
    path: "/top-movies"
  },
  {
    pathname: "Multfilms",
    path: "/multfilms"
  },
  {
    pathname: "Dashboard",
    path: "/dashboard"
  }
];

export default links;
