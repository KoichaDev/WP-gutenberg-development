var registerBlockType =  wp.blocks.registerBlockType;

registerBlockType("block-course/firstblock", {
    edit: () => {
        return "Edit"
    }, 
    save: () => {
        return "save"
    }
})