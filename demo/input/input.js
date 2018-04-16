blocks.register({
    name: "UserInput",
    family: "Input",
    description: "This is a String user input",
    fields: [
        {
            name: "Value",
            type: "String",
            defaultValue: 0,
            attrs: "editable inpût"
        },
		{
            name: "Label",
            attrs: "editable",
            type: "string",
			defaultValue: "input label"
        },
        {
            card: "0-1",
            name: "Value",
            attrs: "output",
			type: "string"
        }
    ]
});
