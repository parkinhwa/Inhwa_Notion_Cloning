import { push } from "../../util/router.js";
import { $listmaker } from "../../util/listmaker.js";

export default function NotionList({
  $target,
  initialState,
  onToggled,
  onAdd,
  onSubAdd,
  onDelete,
}) {
  const $notionList = document.createElement("div");
  const $pageadd = document.createElement("div");
  $notionList.className = "notion-root";
  $pageadd.className = "page-add";

  $target.appendChild($notionList);
  $target.appendChild($pageadd);

  this.state = initialState;

  this.setState = (nextState, openPage) => {
    this.state = nextState;
    this.render(openPage);
  };

  this.render = (openPage) => {
    $notionList.innerHTML = `
      ${this.state
        .map((document) => {
          return $listmaker(document, 20, openPage);
        })
        .join("")}
    `;

    $pageadd.innerHTML = `
      <div class="page-add-btn"><i class="bi bi-plus-lg" style="margin-right:10px;"></i>페이지 추가</div>
      `;
  };

  this.render();

  $notionList.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { id } = $li.dataset;
    if (e.target.id === "subpagelist") {
      onToggled(id);
    } else if (e.target.id === "subpageadd") {
      onSubAdd(id);
    } else if (e.target.id === "pagedel") {
      const warning = confirm("삭제하시겠습니까?");
      if (warning) {
        onDelete(id);
      }
    } else if ($li) {
      push(`/documents/${id}`);
    }
  });

  $pageadd.addEventListener("click", (e) => {
    onAdd();
  });
}
