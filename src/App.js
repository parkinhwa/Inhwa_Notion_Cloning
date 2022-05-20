import NotionPage from "./component/Page/NotionPage.js";
import NotionEditPage from "./component/Page/NotionEditPage.js";
import { initRouter } from "./util/router.js";
import ErrorPage from "./component/Page/ErrorPage.js";
import MainPage from "./component/Page/MainPage.js";

export default function App({ $target }) {
  const $notionListContainer = document.createElement("div");
  $notionListContainer.className = "notion-sidebar";
  $target.appendChild($notionListContainer);

  const $MainpageContainer = document.createElement("div");
  $MainpageContainer.className = "mainpage";
  $target.appendChild($MainpageContainer);

  const $EditorContainer = document.createElement("div");
  $EditorContainer.className = "notion-editor";
  $target.appendChild($EditorContainer);

  const notionPage = new NotionPage({
    $target: $notionListContainer,
    initialState: [],
  });

  new MainPage({ $target: $MainpageContainer });

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
    if (pathname === "/") {
      notionPage.setState();
      $MainpageContainer.style.display = "block";
    } else if (pathname.indexOf("/documents/") === 0) {
      const [, , documentId] = pathname.split("/");
      notionPage.setState();
      notioneditpage.setState({ documentId });
      $MainpageContainer.style.display = "none";
    } else {
      $notionListContainer.style.display = "none";
      $EditorContainer.style.display = "none";
      $MainpageContainer.style.display = "none";
      new ErrorPage({ $target });
    }
  };
  this.route();

  initRouter(() => this.route());
}
