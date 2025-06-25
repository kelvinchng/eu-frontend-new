#!/bin/bash

# Fix all unescaped entities errors
echo "Fixing unescaped entities..."

# Fix single quotes
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/'/\&apos;/g"

# Fix double quotes in JSX text content (more selective to avoid breaking code)
find src -name "*.tsx" | while read file; do
  # This is a simplified approach - in production you'd want more sophisticated parsing
  sed -i '' 's/\([>][^<]*\)"\([^<]*[<]\)/\1\&quot;\2/g' "$file"
done

echo "Fixed unescaped entities"