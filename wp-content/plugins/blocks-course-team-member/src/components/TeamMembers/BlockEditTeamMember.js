import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const BlockEditTeamMember = (props) => {
    const { attributes, setAttributes } = props;
    const { name, bio } = attributes;

    // prettier-ignore
    const onChangeNameHandler = (nameValues) => setAttributes({ name: nameValues });

    // prettier-ignore
    const onChangeBioHandler = (bioValues) => setAttributes({ bio: bioValues });

    return (
        <div {...useBlockProps()}>
            <RichText
                placeholder={__("Member name", "team-member")}
                tagName="h4"
                value={name}
                onChange={onChangeNameHandler}
                allowedFormats={[]}
            />

            <RichText
                placeholder={__("Member Bio", "team-member")}
                tagName="p"
                value={bio}
                onChange={onChangeBioHandler}
                allowedFormats={[]}
            />
        </div>
    );
};

export default BlockEditTeamMember;
