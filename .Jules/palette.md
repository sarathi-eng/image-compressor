## 2024-05-22 - [File Input A11y]
**Learning:** `display: none` on file inputs completely removes them from the accessibility tree and prevents keyboard focus, breaking keyboard navigation.
**Action:** Use visually-hidden CSS patterns (`clip: rect(0,0,0,0)`, `position: absolute`, etc.) on file inputs, and apply `:focus-visible` styling to their adjacent `<label>` to maintain focus state visibility.
