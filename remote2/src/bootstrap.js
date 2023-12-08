const mount = (el) => {
  const text = `<h2>This is the remote2 app developed by Red Team</h2>`;

  el.innerHTML = text;
};

if (process.env.NODE_ENV === "development") {
  // Assuming the host doesn't have an element with id used here,
  // and the id structure: teamName-featureOrAppName
  const el = document.querySelector("#redTeam-remote2");

  if (el) {
    mount(el);
  }
}

// Used by host
export { mount };
