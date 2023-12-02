const nodeVersion = document.getElementById("node-version");
nodeVersion.innerText = `${versions.node()}`;

const chromeVersion = document.getElementById("chrome-version");
chromeVersion.innerText = `${versions.chrome()}`;

const electronVersion = document.getElementById("electron-version");
electronVersion.innerText = `${versions.electron()}`;

const additionalFunctionality = document.createElement("div");
additionalFunctionality.innerText = "add additional functionality";

document.body.append(additionalFunctionality);

async function test() {
  const response = await versions.ping();
  console.log(response);
}

test();
