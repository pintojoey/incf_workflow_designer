blocks.register({
    name: "Neural Net",
    family: "Classifier",
    fields: [
        {
            name: "iterations",
            card: "0-*",
            attrs: "editable",
            type: "number",
			defaultValue: 100
        },
        {
            name: "step size",
            card: "0-*",
            attrs: "editable",
            type: "number",
            extensible: true,
            card: "1",
			defaultValue: 1
        },
        {
            name: "mini batch fraction",
            card: "0-*",
            attrs: "editable",
            type: "number",
			defaultValue: 1.0
        },
		{
            name: "dataset",
            card: "0-*",
            attrs: "input",
            type: "string"
        },
		{
            name: "model",
            card: "0-*",
            attrs: "output",
            type: "number"
        }
    ]
});
