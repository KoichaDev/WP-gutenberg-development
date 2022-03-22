import { registerPlugin } from '@wordpress/plugins';
import {
    PluginSidebar,
    PluginDocumentSettingPanel,
    PluginPostStatusInfo,
    PluginPrePublishPanel,
    PluginPostPublishPanel,
    PluginMoreMenuItem,
    PluginBlockSettingsMenuItem
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin('block-course-plugin', {
    render: () => {
        return (
            <>
                <PluginDocumentSettingPanel
                    title={__('My Panel', 'block-meta-data')}
                    icon='admin-collapse'>
                    <p>Document Setting panel</p>
                </PluginDocumentSettingPanel>

                <PluginPostStatusInfo>
                    <p>Status info content</p>
                </PluginPostStatusInfo>

                <PluginPrePublishPanel title={__('Pre publish title', 'block-meta-data')}>
                    Pre publish content
                </PluginPrePublishPanel>

                <PluginPostPublishPanel title={__('Post publish title', 'block-meta-data')}>
                    Post publish content
                </PluginPostPublishPanel>

                <PluginMoreMenuItem icon="admin-customizer" onClick={() => alert('true')}>
                    Plugin Item
                </PluginMoreMenuItem>

                <PluginBlockSettingsMenuItem 
                    allowedBlocks={['core/paragraph']} 
                    icon='admin-home' 
                    label='New Item' 
                    onClick={() => alert(true)} 
                />

                <PluginSidebar
                    name="meta-fields-sidebar"
                    icon="admin-settings"
                    title={__('Post Options', 'block-meta-data')}
                >
                    asuidjasodjias
                </PluginSidebar>
            </>
        )

    }
})