java -jar compiler.jar --js "./../Source/WebGL/SDK/SEA3D.js" "./../Source/WebGL/SDK/SEA3DLZMA.js" "./../Source/WebGL/SDK/SEA3DDeflate.js" "./../Source/WebGL/Three.JS/SEA3DLoader.js" "./../Source/WebGL/Three.JS/SEA3DLegacy.js" "./../Source/WebGL/Three.JS/SEA3DAmmoLoader.js" --js_output_file "./../Build/Three.JS/sea3d.min.js" --language_in=ECMASCRIPT5 --warning_level QUIET
java -jar compiler.jar --js "./../Source/WebGL/SDK/SEA3D.js" "./../Source/WebGL/SDK/SEA3DLZMA.js" "./../Source/WebGL/Three.JS/SEA3DLoader.js" "./../Source/WebGL/Three.JS/SEA3DAmmoLoader.js" --js_output_file "./../Build/Three.JS/sea3d.tjs.min.js" --language_in=ECMASCRIPT5 --warning_level QUIET