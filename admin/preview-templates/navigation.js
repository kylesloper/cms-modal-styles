import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({

  render() {
    const entry = this.props.entry;

    return html`
    <main className="m-4 mr-14 font-medium">
    <nav className="w-full bg-gradient-to-b from-white flex flex-row justify-between lg:px-10 md:px-4 px-20 md:pt-4 pt-12 z-40 pb-10">
    <img className="logo" id="navLogo" src="${entry.getIn(["data", "navImg"], null)}" />
<ul className="flex flex-row list-none">
<li>
<a className="primary-btn mt-5 mr-10 mx-4 sm:hidden z-40">${entry.getIn(["data", "button"], null)}</a>
</li>
<li>
<div className="navhamburger">
<button id="hamburger" className="menu navhamburger w-20"  aria-label="Site Menu">
      <svg id="ham-svg" className="stroke-current text-not-black" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button></div>
</li>
</ul>
    </nav>
    </main>
`;
  }
});

export default Post;