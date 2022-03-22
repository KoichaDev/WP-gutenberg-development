import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { PanelBody, TextControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

const MetaFieldsInputs = () => {
    const subtitleValue = useSelect(select => {
        return select('core/editor').getEditedPostAttribute('meta')._block_course_post_subtitle;
    }, [])

    const { editPost } = useDispatch('core/editor');

    return (
        <PanelBody title={__('Subtitle Options', 'block-meta-data')}>
            <TextControl label={__('Subtitle')} value={subtitleValue} onChange={(value) => {
                editPost({
                    meta: {
                        _block_course_post_subtitle: value
                    }
                })
            }} />
        </PanelBody>
    )
}

registerPlugin('block-course-plugin', {
    render: () => {



        return (
            <>
                <PluginSidebar
                    name="meta-fields-sidebar"
                    icon="admin-settings"
                    title={__('Post Options', 'block-meta-data')}
                >
                    <MetaFieldsInputs />
                </PluginSidebar>
            </>
        )

    }
})