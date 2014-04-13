var itemArray =[
        { title: "Marvelous Mint", text: "Gelato", picture: "http://try.buildwinjs.com/images/fruits/60Mint.png" },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "http://try.buildwinjs.com/images/fruits/60Strawberry.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "http://try.buildwinjs.com/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "http://try.buildwinjs.com/images/fruits/60Lemon.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "http://try.buildwinjs.com/images/fruits/60Orange.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "http://try.buildwinjs.com/images/fruits/60Vanilla.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "http://try.buildwinjs.com/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "http://try.buildwinjs.com/images/fruits/60Lemon.png" }
];

var items = [];

// Generate 160 items
for (var i = 0; i < 20; i++) {
    itemArray.forEach(function (item) {
        items.push(item);
    });
}


WinJS.Namespace.define("Sample.ListView", {
    data: new WinJS.Binding.List(items)
});
WinJS.UI.processAll();

