import { useBlockProps, RichText } from "@wordpress/block-editor";

const BlockSaveTeamMember = ({ attributes }) => {
    const { name, bio } = attributes;
    return (
        <div {...useBlockProps.save()}>
            <RichText.Content tagName="h4" value={name} />
            <RichText.Content tagName="p" value={bio} />
        </div>
    );
};

export default BlockSaveTeamMember;
