import { registerBlockType } from "@wordpress/blocks";

// components
import './Blocks/TeamMembers/index'

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("blocks-course/team-members", {
	edit: Edit,
	save,
});
