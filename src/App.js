import NotionPage from "./component/Sidebar/NotionPage.js";
import NotionEditPage from "./component/Editor/NotionEditPage.js";
import { initRouter } from "./util/router.js";

export default function App({ $target }) {
  const $notionListContainer = document.createElement("div");
  const $EditorContainer = document.createElement("div");

  $notionListContainer.className = "notion-sidebar";
  $EditorContainer.className = "notion-editor";

  $target.appendChild($notionListContainer);
  $target.appendChild($EditorContainer);

  const notionPage = new NotionPage({
    $target: $notionListContainer,
    initialState: [],
  });

  const notioneditpage = new NotionEditPage({
    $target: $EditorContainer,
    initialState: {
      documentId: "new",
      document: {
        title: "",
        content: "",
      },
    },
    onNotionList: () => {
      notionPage.setState();
    },
  });

  this.route = () => {
    const { pathname } = window.location;
    console.log(pathname);
    if (pathname === "/") {
      notionPage.setState();
    } else if (pathname.indexOf("/documents/") === 0) {
      const [, , documentId] = pathname.split("/");
      notionPage.setState();
      notioneditpage.setState({ documentId });
    }
  };
  this.route();

  initRouter(() => this.route());
}
