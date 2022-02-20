var registerBlockType =  wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType("block-course/firstblock", {
    edit: () => {
        return createElement('P', {
            classname: 'first-block'
        }, "Edit")
    }, 
    save: () => {
        return createElement('P', null, "Save")
    }
})