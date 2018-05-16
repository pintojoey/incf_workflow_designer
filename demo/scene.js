var scene = {"edges":[{"id":6,"block1":26,"connector1":["data","output"],"block2":28,"connector2":["input","input"]},{"id":7,"block1":28,"connector1":["data","output"],"block2":29,"connector2":["input","input"]},{"id":8,"block1":29,"connector1":["data","output"],"block2":30,"connector2":["input","input"]},{"id":9,"block1":30,"connector1":["data","output"],"block2":31,"connector2":["input","input"]},{"id":11,"block1":31,"connector1":["data","output"],"block2":27,"connector2":["input","input"]},{"id":12,"block1":27,"connector1":["data","output"],"block2":32,"connector2":["trainingdataset","input"]}],"blocks":[{"id":26,"x":11.292077327489949,"y":-89.44901533727266,"type":"Offline Data","module":null,"values":{"file":"LED_28_06_2012_104.vhdr","format":"EEG file"}},{"id":27,"x":738.3760468138428,"y":265.3750801820368,"type":"Epoch Extraction","module":null,"values":{"pre-stimulus":"100","post-stimulus":"1000"}},{"id":28,"x":144.10743922112212,"y":43.34701620239602,"type":"Baseline Correction","module":null,"values":{"start time":"0","end time":"100"}},{"id":29,"x":280.8742298352692,"y":131.93190905331625,"type":"Channel Selection","module":null,"values":{"channels":["Cz","Pz","Fz"]}},{"id":30,"x":420.0307603196461,"y":201.361987439466,"type":"Band-pass Filter","module":null,"values":{"low frequency":"0.1","high frequency":"8"}},{"id":31,"x":559.6046333781709,"y":275.8352576853921,"type":"Averaging","module":null,"values":{"markers":"S 1,-1"}},{"id":32,"x":858.9621724417707,"y":104.38302691564138,"type":"SVM","module":null,"values":{"iterations":100,"step size":1,"mini batch fraction":1,"reg param":0.01}}]};