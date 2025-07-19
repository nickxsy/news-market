import { Col, Flex, Row, Spin } from 'antd';
import { useEffect, useRef } from 'react';

import { useAppDispatch } from '@/shared/lib';

import { PostItem, postStore } from '@/entities/post';

import { usePosts } from '../model/use-posts';

export function PostList() {
  const { posts, page, hasMore, isLoading } = usePosts();

  const observerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        dispatch(postStore.actions.loadPosts(page + 1));
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [isLoading, hasMore, page, dispatch]);

  return (
    <>
      <Row gutter={[8, 8]}>
        {posts.map(post => (
          <Col span={8} key={post.id}>
            <PostItem post={post} />
          </Col>
        ))}
      </Row>

      {isLoading && posts.length > 0 && (
        <Flex justify="center" style={{ margin: '20px 0' }}>
          <Spin />
        </Flex>
      )}
      {hasMore && !isLoading && (
        <div ref={observerRef} style={{ height: '20px', margin: '20px 0' }} />
      )}
    </>
  );
}
