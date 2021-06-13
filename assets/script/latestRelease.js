let latestReleaseEl = document.getElementById("latestRelease");

fetch('https://raw.githubusercontent.com/a2iga/a2iga/main/ota.json')
  .then(response => response.ok ? response : Promise.reject(response))
  .then(response => response.json()) // или как текст `response.text()`
  .then(json => {

		console.log(json);

    latestReleaseEl.innerHTML = json.versionName + "." + json.versionCode;

  }
);
