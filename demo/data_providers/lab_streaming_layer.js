blocks.register({
    name: "LabStreamingLayer",
    family: "Data Providers",
    description: "LAB STREAMING LAYER",
    fields: [
        {
            name: "Index",
            type: "number",
            defaultValue: 0,
            attrs: "editable inpût"
        },
        {
            card: "0-1",
            name: "Input",
            attrs: "input",
			type: "data"
        }
    ]
});
