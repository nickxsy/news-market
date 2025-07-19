import { HomeFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import { Link, Outlet } from 'react-router';

import { ROUTES } from '@/shared/model';

const styles = {
  content: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
    height: '100%',
    paddingTop: 120
  },
  header: {
    backgroundColor: 'white',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed' as const,
    top: 0,
    zIndex: 100,
    width: '100%'
  }
};

export function AppLayout() {
  return (
    <Layout>
      <Layout.Header style={styles.header}>
        <Link to={ROUTES.POSTS}>
          <HomeFilled style={{ fontSize: 24 }} />
        </Link>
      </Layout.Header>
      <Layout.Content style={styles.content}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
