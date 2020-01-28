import React from 'react';
import TextContainer from 'components/TextContainer';
import WithLink from 'components/wrappers/WithLink';
import Button from 'uiComponents/Button';
import PostCategory from '../../postAtoms/PostCategory';
import PostHeading from '../../postAtoms/PostHeading';
import PostFeaturedImage from '../../postAtoms/PostFeaturedImage';
import styles from './PostPreview.module.scss';

const PostPreview = ({
  frontmatter: { heading, path, category, featuredImage },
  excerpt,
  headingTag = 'h2',
}) => (
  <TextContainer>
    <article className={styles.PostPreview}>
      {featuredImage && featuredImage.data ? (
        <WithLink
          path={path}
          className={styles.PostPreview_postFeaturedImageLink}
        >
          <PostFeaturedImage featuredImageData={featuredImage.data} />
        </WithLink>
      ) : (
        <div className={styles.PostPreview_postFeaturedImageLink} />
      )}

      <div className={styles.PostPreview_content}>
        {category && (
          <PostCategory
            category={category}
            parentClass={styles.PostPreview_postCategory}
          />
        )}
        <PostHeading
          heading={heading}
          path={path}
          parentClass={styles.PostPreview_postHeading}
          headingTag={headingTag}
        />
        <p className={styles.PostPreview_excerpt}>{excerpt}</p>
        <Button path={path}>Continue reading</Button>
      </div>
    </article>
  </TextContainer>
);

export default PostPreview;
