import NotionList from "./NotionList.js";
import NotionListHeader from "./NotionListHeader.js";

import {
  createDocument,
  deleteDocument,
  getDocuments,
} from "../../api/document.js";
import { push } from "../../util/router.js";

export default function NotionPage({ $target, initialState }) {
  const $page = document.createElement("div");
  const openPage = new Map();
  initialState = this.state;

  this.setState = async () => {
    const documents = await getDocuments();
    notionList.setState(documents, openPage);
    this.render();
  };

  this.render = async () => {
    $target.appendChild($page);
  };

  new NotionListHeader({ $target });
  const notionList = new NotionList({
    $target,
    initialState: [],
    onToggled: async (id) => {
      !openPage.get(id.toString())
        ? openPage.set(id.toString(), true)
        : openPage.delete(id.toString());
      this.setState();
    },
    onAdd: async () => {
      const init = { title: "", parent: null };
      const { id } = await createDocument(init);
      push(`/documents/${id}`);
      this.setState();
    },
    onSubAdd: async (parentid) => {
      const subpage = { title: "", parent: parentid };
      const { id } = await createDocument(subpage);
      push(`/documents/${id}`);
      this.setState();
      openPage.set(parentid.toString(), true);
    },
    onDelete: async (id) => {
      await deleteDocument(id);
      openPage.delete(id.toString());
      history.back();
      this.setState();
    },
  });
}
