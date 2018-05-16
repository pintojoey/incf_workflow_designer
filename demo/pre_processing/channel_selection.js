blocks.register({
    name: "Channel Selection",
    family: "Pre-processing",
    fields: [
        {
            name: "Input",
            type: "data",
            defaultValue: "",
            attrs: "input"
        },
        {
            name: "channels",
            card: "0-*",
            attrs: "editable",
            type: "string[]",
			defaultValue: ""
        },
        {
            name: "Data",
            attrs: "output",
			type: "data"
        }
    ]
});
