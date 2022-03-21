import { registerBlockType} from "@wordpress/blocks";

import './plugins/sidebar';

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("blocks-course/meta-data", {
	edit: Edit,
	save,
});
