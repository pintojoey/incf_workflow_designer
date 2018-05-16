blocks.register({
    name: "Offline Data",
    family: "Data Providers",
    description: "Provide Data from an offline datasource",
    fields: [
        {
            name: "File",
            type: "String",
            defaultValue: "",
            attrs: "editable inpût"
        },
		{
            name: "Format",
            attrs: "editable",
            type: "string",
			defaultValue: "EEG file"
        },
        {
            card: "0-1",
            name: "Data",
            attrs: "output",
			type: "data"
        }
    ]
});
