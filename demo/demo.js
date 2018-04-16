(function(){
    function include(file) {
        $('head').append('<script type="text/javascript" src="demo/'+file+'"></script>');
    }
    
    blocks = new Blocks();
	//<--WIP-->
	include('input/input.js');
	include('input/stream.js');
	include('input/lab_streaming_layer.js');
	include('signals/wavelet_transform.js');
	include('signals/ICA.js');
	include('signals/matching_pursuit.js');
	include('feature_extraction/segmentation.js');
	include('visualization/bar_chart.js');
	include('visualization/line_graph.js');
	
	include('classifier/model.js');
    include('classifier/svm.js');
	include('classifier/ann.js');
	include('classifier/decisiontree.js');
	include('classifier/logisticregression.js');
	include('classifier/randomforest.js');
	//</--WIP-->
	
	include('general/data.js');
	include('general/time.js');
	include('general/comment.js');
	include('general/io.js');
	include('general/const.js');
    include('math/sin.js');
    include('math/gains.js');
	include('math/add.js');
    include('math/spline.js');
    include('math/multiplexer.js');
	include('hardware/motor.js');
    
	include('image/camera.js');
    include('image/blobdetect.js');
	
    
    include('scene.js');

    blocks.types.addCompatibility('string', 'number');
    blocks.types.addCompatibility('string', 'bool');
    blocks.types.addCompatibility('bool', 'number');
    blocks.types.addCompatibility('bool', 'integer');
    blocks.types.addCompatibility('bool', 'string');

    blocks.run('#blocks');
    blocks.load(scene);

    blocks.ready(function() {
	blocks.menu.addAction('Export', function(blocks) {
	    console.log($.toJSON(blocks.export()));
	}, 'export');

        $('.setLabel').click(function() {
            for (k in blocks.edges) {
                var edge = blocks.edges[k];
                edge.setLabel('Edge #'+edge.id);
            }
        });

        $('.setInfos').click(function() {
            for (k in blocks.blocks) {
                var block = blocks.blocks[k];
                block.setInfos('Hello, I am the block #'+block.id);
            }
        });

        $('.setDescriptions').click(function() {
            for (k in blocks.blocks) {
                var block = blocks.blocks[k];
                block.setDescription('This is the block #'+block.id);
            }
        });

        $('.resize').click(function() {
            $('#blocks').width('300px');
            blocks.perfectScale();
        });

        $('.hideIcons').click(function() {
            blocks.showIcons = false;
            blocks.redraw();
        });

        $('.stressTest').click(function() {
            for (var x=0; x<1000; x+=100) {
                for (var y=0; y<1000; y+=100) {
                    blocks.addBlock('Sinus', x, y);
                }
            }
        });
    });
})();
