export default {
  '*.{ts,tsx,js,jsx}': ['prettier --check', 'eslint'],
  '*.css': ['prettier --check'],
  '*.{json,md,mdx}': ['prettier --check']
};
