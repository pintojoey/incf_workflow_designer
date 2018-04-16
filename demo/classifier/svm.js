blocks.register({
    name: "SVM",
    family: "Classifier",
    fields: [
        {
            name: "iterations",
            card: "0-*",
            attrs: "editable",
            type: "number",
			defaultValue: 100
        },
        {
            name: "step size",
            card: "0-*",
            attrs: "editable",
            type: "number",
            extensible: true,
            card: "1",
			defaultValue: 1
        },
        {
            name: "mini batch fraction",
            card: "0-*",
            attrs: "editable",
            type: "number",
			defaultValue: 1.0
        },
		{
            name: "reg param",
            card: "0-*",
            attrs: "editable",
            type: "number",
			defaultValue: 0.01
        },
		{
            name: "TrainingDataset",
            type: "data",
            attrs: "input"
        },
		{
            name: "TestDataset",
            attrs: "input",
            type: "data"
        },
		{
            name: "model",
            card: "1-*",
            attrs: "output",
            type: "model"
        }
		,
		{
            name: "prediction",
            card: "0-*",
            attrs: "output",
            type: "data"
        }
    ]
});
