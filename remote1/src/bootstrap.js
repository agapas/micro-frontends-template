const mount = (el) => {
  const text =
    "<h2 style='color:blue'>The Remote1 app content developed by Blue Team</h2>";

  el.innerHTML = text;
};

if (process.env.NODE_ENV === "development") {
  // Assuming the host doesn't have an element with id used here,
  // and the id structure: teamName-featureOrAppName
  const el = document.querySelector("#blueTeam-remote1");

  if (el) {
    mount(el);
  }
}

// Used by host
export { mount };
