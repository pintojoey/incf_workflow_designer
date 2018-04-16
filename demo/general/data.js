blocks.register({
    name: "data",
    family: "General",
    fields: [
        {
            name: "columns",
            card: "0-*",
            attrs: "editable",
            type: "string[]",
			defaultValue: 1.0
        },
		 {
            name: "label",
            card: "0-*",
            attrs: "editable",
            type: "string",
			defaultValue: ""
        },
		{
            name: "file",
            card: "1-*",
            attrs: "editable",
            type: "string",
			defaultValue: ""
        },
		{
            name: "dataset",
            card: "1-*",
            attrs: "output",
            type: "data"
        }
    ]
});
