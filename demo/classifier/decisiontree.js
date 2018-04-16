blocks.register({
    name: "Decision Tree",
    family: "Classifier",
    fields: [
        {
            name: "Step size",
            card: "0-*",
            attrs: "input",
            type: "number[]",
            extensible: true,
            card: "1"
        },
        {
            name: "Iterations",
            card: "0-*",
            attrs: "output",
            type: "number"
        },
        {
            name: "Mini batch Fraction",
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
