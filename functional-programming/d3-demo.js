function ExampleWidget (style) {
    const instance = {};
    let title;
    instance.render = function () {
        const header = document.createElement("h1");
        header.innerText = title;
        document.body.appendChild(header);
    }
    instance.title = function (t) {
        if (arguments.length) {
            title = t;
            return instance;
        }
        else return title;
    }
    return instance;
}

const widget = ExampleWidget();

// setting
widget.title('D3 Functional-Programming');

// getting
console.log(widget.title());

// method chaining (链式调用)
widget.title('D3 Functional-Programming').render();
