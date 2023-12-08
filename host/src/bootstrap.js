import { mount as remote1Mount } from "remote1App/Remote1Display";
import { mount as remote2Mount } from "remote2App/Remote2Display";

remote1Mount(document.querySelector("#remote1-app"));
remote2Mount(document.querySelector("#remote2-app"));
