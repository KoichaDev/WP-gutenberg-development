import { __ } from '@wordpress/i18n'
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data'
import { useEntityProp } from '@wordpress/core-data'
import { useBlockProps } from '@wordpress/block-editor'


import './editor.scss';

const edit = () => {
  const postType = useSelect(select => select('core/editor').getCurrentPostType(), []);

  const [meta, setMeta] = useEntityProp('postType', postType, 'meta')
  const subtitleValue = meta._block_course_post_subtitle;

  return (
    <div {...useBlockProps()}>
      {subtitleValue || subtitleValue === '' ? (
        <TextControl
          label={__('Post Subtitle', 'block-meta-data')}
          value={subtitleValue}
          onChange={(value) => setMeta({ ...meta, _block_course_post_subtitle: value })}
        />
      ) : (
        __('Meta Field is Not Registered', 'block-meta-data')
      )}


    </div>
  )
}

export default edit