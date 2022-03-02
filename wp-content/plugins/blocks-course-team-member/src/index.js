import { registerBlockType, createBlock } from "@wordpress/blocks";

// components
import "./components/TeamMembers/index";

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("blocks-course/team-members", {
	edit: Edit,
	save,
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/gallery"],
				transform: ({ images, columns }) => {
					const innerBlocks = images.map(({ id, url, alt }) => {
						return createBlock("blocks-course/team-member", { id, url, alt });
					});

					return createBlock(
						"blocks-course/team-members",
						{
							columns: columns || 2,
						},
						innerBlocks
					);
				},
			},
			{
				type: "block",
				blocks: ["core/image"],
				isMultiBlock: true,
				transform: (attributes) => {
					const innerBlocks = attributes.map(({ id, url, alt }) => {
						return createBlock("blocks-course/team-member", { id, url, alt });
					});

					return createBlock(
						"blocks-course/team-members",
						{
							// adding columns based on the number of images we have
							columns: attributes.length > 3 ? 3 : attributes.length,
						},
						innerBlocks
					);
				},
			},
		],
	},
});
