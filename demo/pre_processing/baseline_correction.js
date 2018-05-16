blocks.register({
    name: "Baseline Correction",
    family: "Pre-processing",
    fields: [
        {
            name: "Input",
            type: "data",
            defaultValue: "",
            attrs: "input"
        },
		{
            name: "Start time",
            attrs: "editable",
            type: "number",
			defaultValue: "0"
        },
        {
            name: "End Time",
            attrs: "editable",
            type: "number",
			defaultValue: "100"
        },
        {
            name: "Data",
            attrs: "output",
			type: "data"
        }
    ]
});
