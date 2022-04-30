import { push } from "../../util/router.js";

export default function NotionList({
  $target,
  initialState,
  onToggled,
  onPageClick,
  onAdd,
  onSubAdd,
  onDelete,
}) {
  const $notionList = document.createElement("div");
  $notionList.className = "notion-root";
  $target.appendChild($notionList);

  const $pageadd = document.createElement("div");
  $pageadd.className = "page-add";
  $target.appendChild($pageadd);

  this.state = initialState;

  this.setState = (nextState, openPage) => {
    this.state = nextState;
    this.render(openPage);
  };

  const $listmaker = ({ id, title, documents }, margin, openPage) => {
    if (title === "") {
      title = "제목 없음";
    }
    return `
    <ul class="notion-menu">
          <li data-id="${id}" class="notion-list">
          <div class="subpagelist" style="margin-left:${margin}px; transform:${
      openPage.has(id.toString()) ? "rotate(90deg)" : ""
    }" ><i id="subpagelist" class="bi bi-play-fill"></i></div>
          <div class="pagelist" style="width: calc(70% - ${margin}px);">${title}</div>
          <div class="pagedel"><i id="pagedel" class="bi bi-trash"></i></div>
          <div class="subpageadd"><i id="subpageadd" class="bi bi-plus-square"></i></div>
          </li>
          <div class="notion-child" style="display:${
            openPage.has(id.toString()) ? "block" : "none"
          }">
          ${
            documents.length
              ? documents
                  .map(({ id, title, documents }) => {
                    return $listmaker(
                      { id, title, documents },
                      margin + 15,
                      openPage
                    );
                  })
                  .join("")
              : `<ul class="subpagenone" style="margin-left:${
                  margin + 25
                }px;" style="display:none">하위 페이지가 없습니다.</ul>`
          }
          </div>
    </ul>
          `;
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

  const clickli = [];
  $notionList.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { id } = $li.dataset;
    if (e.target.id === "subpagelist") {
      onToggled(id);
    } else if (e.target.className === "pagelist") {
      // push를 하면 $li이 유지가 안되는군
      // push(`/documents/${id}`);
      clickli.push($li);
      $li.classList.add("selected");
      if (clickli.length > 1) {
        console.log(clickli.length)
        clickli.shift().classList.remove("selected");
      }
      // console.log($li);
      // onPageClick(id);
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
