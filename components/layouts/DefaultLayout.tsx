import Container from "@material-ui/core/Container";

import BaseLayout from "./BaseLayout";
import styles from "./DefaultLayout.module.scss";

export default function IssueLayout({ children, frontMatter }) {
  return (
    <BaseLayout title={frontMatter.title}>
      <Container maxWidth="md" className={styles.main}>
        <h1>{frontMatter.title}</h1>
        {children}
      </Container>
    </BaseLayout>
  );
}
