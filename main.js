const container = document.querySelector("#demo");

try {
  const res = await fetch("main.xml");
  if (res.status !== 200) throw new Error(`status code: ${res.status}`);
  const data = await res.text();
  const parsed = new window.DOMParser().parseFromString(data, "text/html");
  const dom = parsed.getElementsByTagName("computer");
  console.log(dom[0].childNodes[1].outerText);
} catch (err) {
  console.log("ERRORE");
  console.error(err);
}
