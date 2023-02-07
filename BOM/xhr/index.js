function myAjax(option = { method: "get", url: "", param: {}, onSuccess: (data) => {}, onError: (err) => {} }) {
  const { method, url, param } = option;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.send(param);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        onSuccess(xhr.response);
      } else {
        onError("请求失败！");
      }
    }
  };
}
