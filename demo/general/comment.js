blocks.register({
    name: "Comment",
	family: "General",
    class: 'commentblock',
    fields: [
        {
            name: "Comment",
            hideLabel: true,
            type: "textarea",
            defaultValue: 'Comment text',
            card: 0,
            attrs: 'editable'
        }
    ]
});
