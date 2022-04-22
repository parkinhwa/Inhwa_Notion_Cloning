export const $listmaker = ({ id, title, documents }, margin, openPage) => {
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
