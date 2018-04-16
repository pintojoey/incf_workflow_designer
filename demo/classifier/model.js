blocks.register({
    name: "model",
    family: "Data",
    fields: [
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
            name: "name",
            attrs: "input",
            type: "model"
        }
    ]
});
