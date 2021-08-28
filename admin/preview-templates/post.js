import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
<main className="m-4 mr-14 font-medium ">
  <article>
    <h1>${entry.getIn(["data", "title"], null)}</h1>
    <p className="mt-4 text-industrial-yellow">
        <time>${format(
      entry.getIn(["data", "date"], new Date()),
      "dd MMM, yyyy "
    )
      }</time>
      <a>by </a><a className="underline hover:no-underline cursor-pointer">${entry.getIn(["data", "author"], null)}</a>
    </p>

    <p className="mt-8">
      ${entry.getIn(["data", "tags"], []).map(
        tag =>
          html`
      <a className="mr-4 cursor-pointer" id="important-link" rel="tag">${tag}</a>
      `
      )
      }
    </p>

    <div className="mt-14">
    ${this.props.widgetFor("body")}
    </div>
  </article>
</main>
`;
  }
});

export default Post;