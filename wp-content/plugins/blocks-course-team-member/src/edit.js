import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	// This will generate 2x team member blocks
	const teamMemberTemplate = [
		["blocks-course/team-member"],
		["blocks-course/team-member"],
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={["blocks-course/team-member"]}
				template={teamMemberTemplate}
			// templateLock="all" // This prevents user to adding/removing or dragging the blocks
			/>
		</div>
	);
}
