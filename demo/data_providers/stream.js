blocks.register({
    name: "Stream",
    family: "Data Providers",
    description: "This is a standard output",
    fields: [
        {
            name: "Source",
            type: "String",
            defaultValue: "Network socket",
            attrs: "editable inpût"
        },
		{
            name: "Label",
            attrs: "editable",
            type: "string",
			defaultValue: "stream label"
        },
        {
            card: "0-1",
            name: "Value",
            attrs: "output",
			type: "string"
        }
    ]
});
