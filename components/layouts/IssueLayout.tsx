import BaseLayout from "./BaseLayout";

export default function IssueLayout({ children }) {
  return (
    <BaseLayout>
      <h1>This is an issue</h1>
      <div>{children}</div>
    </BaseLayout>
  );
}
