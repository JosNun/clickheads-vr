// const boxEl = document.querySelector('a-box');
// boxEl.addEventListener('mouseenter', () => {
//     boxEl.setAttribute('scale', {
//         x: 2, y: 2, z: 2
//     });
// });

// boxEl.addEventListener('mouseleave', () => {
//     boxEl.setAttribute('scale', {
//         x: 1, y: 1, z: 1
//     });
// });


AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
        to: {
            default: '2.5 2.5 2.5', type: 'vec3'
        },
        from: {
            default: '1 1 1', type: 'vec3'
        },

    },
    init: function () {
        const data = this.data;
        const el = this.el;
        // this.el.addEventListener('mouseenter', () => {
        //     el.object3D.scale.copy(data.to);
        // })
    }
});
