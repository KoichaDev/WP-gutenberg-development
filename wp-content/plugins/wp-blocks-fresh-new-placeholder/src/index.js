import { registerBlockType, createBlock } from "@wordpress/blocks";

import Edit from "./edit";
import save from "./save";

import "./style.scss";

registerBlockType("blocks-course/placeholder", {
	edit: Edit,
	save,
});
