// Wordpress dependencies
import { registerBlockType } from "@wordpress/blocks";

// Block meta
import blockMetaTeamMembers from "./BlockMetaTeamMembers";

// components
import BlockEditTeamMember from "./BlockEditTeamMember";
import BlockSaveTeamMember from "./BlockSaveTeamMember";

registerBlockType("blocks-course/team-member", {
    ...blockMetaTeamMembers,
    edit: BlockEditTeamMember,
    save: BlockSaveTeamMember,
});
