blocks.register({
    name: "Segmentation",
    family: "FeatureEx",
    fields: [
        {
            name: "Input",
            type: "data",
            defaultValue: "",
            attrs: "input"
        },
		{
            name: "Label",
            attrs: "editable",
            type: "string",
			defaultValue: "WT parameter"
        },
        {
            name: "Output",
            attrs: "output",
			type: "data"
        }
    ]
});
