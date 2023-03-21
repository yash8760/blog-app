import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="NOT"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <li className="li" to="/posts?cat=Life">
              Life
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="li" to="/posts?cat=Music">
              Music
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="li" to="/posts?cat=Sport">
              Sport
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="li" to="/posts?cat=Style">
              Style
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="li" to="/posts?cat=Tech">
              Tech
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="li" to="/posts?cat=Cinema">
              Cinema
            </li>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
