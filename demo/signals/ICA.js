blocks.register({
    name: "ICA",
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
			defaultValue: "ICA parameter"
        },
        {
            name: "Output",
            attrs: "output",
			type: "string"
        }
    ]
});
