export default function NotionListHeader({ $target }) {
  const $image = document.createElement("img");
  const $header = document.createElement("div");
  $image.className = "notion-image"
  $header.className = "notion-list-header";
  $image.setAttribute("src", "./img/notion.png");
  $target.appendChild($image);
  $target.appendChild($header);

  this.render = () => {
    $header.innerHTML = `박인화의 Notion`;
  };

  this.render();
}
