export default function Editor({
  $target,
  initialState = {
    title: "",
    content: "",
  },
  onEditing,
}) {
  const $editor = document.createElement("div");
  $editor.className = "editor";
  let isInitialize = false;
  this.state = initialState;

  $target.appendChild($editor);

  this.setState = (nextState) => {
    this.state = nextState;
    $editor.querySelector("[name=title]").value = this.state.title;
    $editor.querySelector("[name=content]").value = this.state.content;

    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      $editor.innerHTML = `
      <input type="text" name="title" placeholder="제목 없음" style="width:800px;"/>
      <textarea name="content" placeholder="내용을 입력해주세요" style="width:800px;height:400px; border: 1px solid black; padding: 8px;">${this.state.content}</textarea>
  `;
      isInitialize = true;
    }
  };

  this.render();
  $editor.addEventListener("keyup", (e) => {
    const { target } = e;

    const name = target.getAttribute("name");
    if (this.state[name] !== undefined) {
      const nextState = {
        ...this.state,
        [name]: target.value,
      };
      this.setState(nextState);
      onEditing(this.state);
    }
  });
}
