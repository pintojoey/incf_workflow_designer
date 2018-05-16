blocks.register({
    name: "Epoch Extraction",
    family: "Segmentation",
    fields: [
        {
            name: "Input",
            type: "data",
            defaultValue: "",
            attrs: "input"
        },
		{
            name: "Pre-Stimulus",
            attrs: "editable",
            type: "number",
			defaultValue: "100"
        },
        {
            name: "Post-Stimulus",
            attrs: "editable",
            type: "number",
			defaultValue: "1000"
        },
        {
            name: "Data",
            attrs: "output",
			type: "data"
        }
    ]
});
