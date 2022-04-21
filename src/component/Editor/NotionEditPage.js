import Editor from "./Editor.js";
import { setItem, getItem } from "../../util/storage.js";
import { getDocuments, updateDocument } from "../../api/document.js";

export default function NotionEditPage({
  $target,
  initialState,
  onNotionList,
}) {
  const $page = document.createElement("div");

  this.state = initialState;

  let docuLocalSaveKey = `temp-document-${this.state.documentId}`;
  const documents = getItem(docuLocalSaveKey, {
    title: "",
    content: "",
  });

  let timer = null;

  const editor = new Editor({
    $target: $page,
    initialState: documents,
    onEditing: (document) => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        setItem(docuLocalSaveKey, {
          ...document,
          tempSaveDate: new Date(),
        });
        await updateDocument(document.id, document);
        onNotionList();
      });
    },
  });

  this.setState = async (nextState) => {
    if (this.state.documentId !== nextState.documentId) {
      docuLocalSaveKey = `temp-document-${this.state.documentId}`;
      this.state = nextState;
      await fetchDocuments();
      return;
    }
    this.state = nextState;
    this.render();
    editor.setState(
      this.state.document || {
        title: "",
        content: "",
      }
    );
  };
  this.render = () => {
    $target.appendChild($page);
  };
  const fetchDocuments = async () => {
    const { documentId } = this.state;
    const document = await getDocuments(documentId);

    this.setState({
      ...this.state,
      document,
    });
  };
}
