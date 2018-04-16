blocks.register({
    name: "Addition",
    family: "Math",
    fields: [
       {
            name: "Terms",
            card: "0-*",
            attrs: "input",
            type: "number[]",
            extensible: true,
            card: "1"
        },
        {
            name: "Average",
            card: "0-*",
            attrs: "output",
            type: "number"
        }
    ]
});
