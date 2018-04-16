blocks.register({
    name: "Random Forest",
    family: "Classifier",
    fields: [
        {
            name: "Input",
            card: "0-*",
            attrs: "input",
            type: "number[]",
            extensible: true,
            card: "1"
        },
        {
            name: "Max Depth",
            card: "0-*",
            attrs: "output",
            type: "number"
        },
        {
            name: "Max Bins",
            card: "0-*",
            attrs: "output",
            type: "number"
        },
        {
            name: "Fraction",
            card: "0-*",
            attrs: "output",
            type: "number"
        }
    ]
});
