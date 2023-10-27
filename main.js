// Initialize a WebXR session using "immersive-ar".
// const session = await navigator.xr.requestSession("immersive-ar");

// session.updateRenderState({
//     baseLayer: new XRWebGLLayer(session, gl)
// });

// // A 'local' reference space has a native origin that is located
// // near the viewer's position at the time the session was created.
// const referenceSpace = await session.requestReferenceSpace('local');

// // Create a render loop that allows us to draw on the AR view.
// const onXRFrame = (time, frame) => {
//     // Queue up the next draw request.
//     session.requestAnimationFrame(onXRFrame);

//     // Bind the graphics framebuffer to the baseLayer's framebuffer
//     gl.bindFramebuffer(gl.FRAMEBUFFER, session.renderState.baseLayer.framebuffer)

//     // Retrieve the pose of the device.
//     // XRFrame.getViewerPose can return null while the session attempts to establish tracking.
//     const pose = frame.getViewerPose(referenceSpace);
//     if (pose) {
//         // In mobile AR, we only have one view.
//         const view = pose.views[0];

//         const viewport = session.renderState.baseLayer.getViewport(view);
//         renderer.setSize(viewport.width, viewport.height)

//         // Use the view's transform matrix and projection matrix to configure the THREE.camera.
//         camera.matrix.fromArray(view.transform.matrix)
//         camera.projectionMatrix.fromArray(view.projectionMatrix);
//         camera.updateMatrixWorld(true);

//         // Render the scene with THREE.WebGLRenderer.
//         renderer.render(scene, camera)
//     }
// }
// session.requestAnimationFrame(onXRFrame);