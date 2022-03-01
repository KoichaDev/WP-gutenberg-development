import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("blocks-course/team-member", {
    title: __("Team Member", "team-member"),
    description: __("A Team Member Item", "team-members"),
    icon: "admin-users",
    parent: ["blocks-course/team-members"],
    edit: () => <p>Hello World (Edit)</p>,
    save: () => <p>Hello World (Saved)</p>,
});
