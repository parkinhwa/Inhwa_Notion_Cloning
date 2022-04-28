export default function ErrorPage({$target}){
    console.log($target);
    const $errorpage = document.createElement("div");
    $errorpage.className = "errorpage"
    $target.appendChild($errorpage)
    this.render = () => {
        $errorpage.innerHTML = `
            <h1 class="errormessage">404 Error</h1>
            <h3 class="errormessage"> 찾을 수 없는 페이지 입니다.</h3>
        `
    }
    this.render();
}