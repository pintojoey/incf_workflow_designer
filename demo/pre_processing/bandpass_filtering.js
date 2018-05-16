blocks.register({
    name: "Band-pass Filter",
    family: "Pre-processing",
    fields: [
        {
            name: "Input",
            type: "data",
            defaultValue: "",
            attrs: "input"
        },
		{
            name: "Low Frequency",
            attrs: "editable",
            type: "number",
			defaultValue: "0.1"
        },
        {
            name: "High Frequency",
            attrs: "editable",
            type: "number",
			defaultValue: "8"
        },
        {
            name: "Data",
            attrs: "output",
			type: "data"
        }
    ]
});
