blocks.register({
    name: "Addition",
    family: "Signals",
    fields: [
        {
            name: "Input",
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
            name: "Output",
            attrs: "output",
			type: "string"
        }
    ]
});
