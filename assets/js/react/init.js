let containers = [];

function initContainer(container, resolveComponent)
{
    if(containers.indexOf(container) > -1) return;
    if(!container.hasAttribute('data-react')) return;
    let name = container.getAttribute('data-react');
    let props = container.hasAttribute('data-react-props') ? JSON.parse(container.getAttribute('data-react-props')) : {};

    Promise.all([import('react'), import('react-dom'), resolveComponent(name)])
        .then(([React, ReactDOM, component]) => {
            let element = React.default.createElement(component.default, props);
            ReactDOM.default.render(element, container);
            containers.push(container);
        })
        .catch((err) => {
            console.error(err);
        })
    ;
}


export function initAll(resolveComponent)
{
    let containers = Array.from(document.querySelectorAll('[data-react]'));
    containers.forEach((container) => {
        initContainer(container, resolveComponent);
    });
}