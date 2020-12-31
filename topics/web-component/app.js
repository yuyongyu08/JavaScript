function componentRender(dom){
  let content = document.createElement('div').innerHTML='It is custom component!';
  dom.append(content)
}