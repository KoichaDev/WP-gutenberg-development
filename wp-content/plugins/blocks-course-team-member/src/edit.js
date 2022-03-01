//prettier-ignore
import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	// prettier-ignore
	const onChangeColumnsHandler = (columnValue) => setAttributes({ columns: columnValue });

	// This will generate 3x team member blocks
	const teamMemberTemplate = [
		["blocks-course/team-member"],
		["blocks-course/team-member"],
		["blocks-course/team-member"],
	];

	return (
		<div
			{...useBlockProps({
				className: `has-${columns}-columns`,
			})}
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__("Columns", "team-members")}
						value={columns}
						onChange={onChangeColumnsHandler}
						min={1}
						max={6}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={["blocks-course/team-member"]}
				orientation={columns === 1 ? "vertical" : "horizontal"}
				template={teamMemberTemplate}
			// templateLock="all" // This prevents user to adding/removing or dragging the blocks
			/>
		</div>
	);
}
