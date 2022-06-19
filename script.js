const compile = () => {
  const html = document.getElementById("html");
  const css = document.getElementById("css");
  const javascript = document.getElementById("js");

  const code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function () {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        javascript.value +
        "</script>"
    );
    code.close();
  };
};

compile();
