// React tries to make a tree from your element!
// first thing that react does is tell the type that what type element that is!

function customRender(reactElement, mainContainer) {
  // first we will create dom element and then we will append it
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  // now we add
  mainContainer.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit Google",
};
// now we will grab the root
const mainContainer = document.querySelector("#root");

// now we want to render an anchor tag mentioned above in reactElement,
// render means i said that give me a tag and i will display it on the screen
// how will it render it? it will add the reactElement in the root.
customRender(reactElement, mainContainer);
