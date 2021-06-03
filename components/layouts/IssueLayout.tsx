import Container from "@material-ui/core/Container";

import BaseLayout from "./BaseLayout";
import styles from "./IssueLayout.module.scss";

export default function IssueLayout({ children, frontMatter }) {
  return (
    <BaseLayout>
      <Container maxWidth="md" className={styles.main}>
        <h1>{frontMatter.title}</h1>
        {children}
      </Container>
    </BaseLayout>
  );
}
