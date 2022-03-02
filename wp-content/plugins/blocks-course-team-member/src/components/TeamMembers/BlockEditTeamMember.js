import { useEffect } from "@wordpress/element";
import {
    useBlockProps,
    RichText,
    MediaPlaceholder,
} from "@wordpress/block-editor";

import { isBlobURL } from "@wordpress/blob";
import { Spinner, withNotices } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const BlockEditTeamMember = (props) => {
    const { attributes, setAttributes, noticeOperations, noticeUI } = props;
    const { name, bio, id: imageid, url, alt } = attributes;

    useEffect(() => {
        // checking if there is no image ID
        if (!imageid && isBlobURL(url)) {
            setAttributes({ url: undefined, alt: "" });
        }
    }, []);

    // prettier-ignore
    const onChangeNameHandler = (nameValues) => setAttributes({ name: nameValues });

    // prettier-ignore
    const onChangeBioHandler = (bioValues) => setAttributes({ bio: bioValues });

    // prettier-ignore
    const onSelectImageHandler = (image) => {
        if (!image || !image.url) {
            return setAttributes({ id: undefined, url: undefined, alt: '' })
        }
        return setAttributes({ id: image.id, url: image.url, alt: image.alt })
    };

    const onUploadErrorHandler = (messageError) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(messageError);
    };

    const onSelectURLImageHandler = (urlImage) => {
        setAttributes({
            id: undefined,
            url: urlImage,
            alt: undefined,
        });
    };

    return (
        <div {...useBlockProps()}>
            {url && (
                <div
                    className={`wp-block-blocks-course-team-member-img ${isBlobURL(url) ? " is-loading" : ""
                        }`}
                >
                    <img src={url} alt={alt} />
                    {isBlobURL(url) && <Spinner />}
                </div>
            )}
            <MediaPlaceholder
                icon="admin-users"
                onSelect={onSelectImageHandler}
                onSelectURL={onSelectURLImageHandler}
                onError={onUploadErrorHandler}
                accept={"image/*"} //Will disable files that is not image
                allowedTypes={["image"]} // This will show on the computer the files are not image will be disabled (can't be selected)
                disableMediaButtons={url} // This will disable the media upload if there is a image being selected
                notices={noticeUI}
            />
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

export default withNotices(BlockEditTeamMember);
