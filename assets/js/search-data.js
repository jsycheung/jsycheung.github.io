// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-starting",
          title: "Starting",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/starting/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },];
