// React hai na vo jo bhi apka element hai usse tree banane ki koshish krta hai!
// first thing jo react krta hai vo hai type, type btata hai ki apka element kis type ka hai? second
// hota hai properties ye props ek object hota hai ye props ke andr jitni chahte properties app add kr do!
//
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
