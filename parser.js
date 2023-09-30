const container = document.querySelector("#container");

const getDataXML = async function(path = "main.xml"){
  try {
    const res = await fetch(path);
    if (res.status !== 200) throw new Error(`status code: ${res.status}`);
    const data = await res.text();
    const parsed = new window.DOMParser().parseFromString(data, "text/html");
    const computers = parsed.getElementsByTagName("computer");
    const text = computers[0].childNodes[7].childNodes[1].outerText;
    container.innerHTML = text;
  } catch (err) {
    console.log("ERRORE");
    console.error(err);
  }
}

getDataXML();