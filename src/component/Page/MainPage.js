export default function MainPage({ $target, display }) {
  const $mainpage = document.createElement("div");
  $mainpage.style.display = display;
  $target.appendChild($mainpage);
  this.render = () => {
    $mainpage.innerHTML = `
            <h1>박인화의 Notion의 오신 것을 환영합니다.</h1>
        `;
  };
  this.render();
}
