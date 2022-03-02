import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";

const BlockSaveTeamMember = ({ attributes }) => {
    const { name, bio, url, alt, id, socialLinks } = attributes;
    return (
        <div {...useBlockProps.save()}>
            {url && (
                <img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
            )}
            {name && <RichText.Content tagName="h4" value={name} />}
            {name && <RichText.Content tagName="p" value={bio} />}
            {socialLinks.length > 0 && (
                <div className="wp-block-blocks-course-team-member-social-media-links">
                    <ul>
                        {socialLinks.map((socialLink, index) => {
                            return <li key={index} data-icon={socialLink.icon}>
                                <a href={socialLink.link}>
                                    <Icon icon={socialLink.icon} />
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BlockSaveTeamMember;
