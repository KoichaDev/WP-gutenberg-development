import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// components
import BlockEditTeamMember from "./BlockEditTeamMember";
import BlockSaveTeamMember from "./BlockSaveTeamMember";

registerBlockType("blocks-course/team-member", {
    title: __("Team Member", "team-member"),
    description: __("A Team Member Item", "team-members"),
    icon: "admin-users",
    parent: ["blocks-course/team-members"],
    supports: {
        reusable: false, //removing this block as reusable
        html: false, //removing this block to edit the HTMl itself
    },
    attributes: {
        name: {
            type: "string",
            source: "html",
            selector: "h4",
        },
        bio: {
            type: "string",
            source: "html",
            selector: "p",
        },
        id: {
            type: "number",
        },
        alt: {
            type: "string",
            source: "attribute", // Will be stored in the alt attribute of img-tag element
            selector: "img",
            attribute: "alt",
            default: "",
        },
        url: {
            type: "string",
            source: "attribute",
            selector: "img",
            attribute: "src",
        },
    },
    edit: BlockEditTeamMember,
    save: BlockSaveTeamMember,
});
