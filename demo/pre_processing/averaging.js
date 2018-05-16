blocks.register({
    name: "Averaging",
    family: "Pre-processing",
    fields: [
        {
            name: "Input",
            type: "data",
            defaultValue: "",
            attrs: "input"
        },
		{
            name: "markers",
            card: "0-*",
            attrs: "editable",
            type: "string[]",
            defaultValue: "S 1,-1",
            description: "Name , Offset"
        },
        {
            name: "Data",
            attrs: "output",
			type: "data"
        }
    ]
});
