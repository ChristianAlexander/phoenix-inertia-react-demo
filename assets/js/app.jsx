// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"

import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import axios from "axios";

axios.defaults.xsrfHeaderName = "x-csrf-token";

createInertiaApp({
    resolve: async (name) => {
        const module = await import(`./pages/${name}.jsx`);
        return module;
    },
    setup({ App, el, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
