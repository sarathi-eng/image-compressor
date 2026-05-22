## 2024-05-22 - React List Rendering Bottlenecks
**Learning:** In a dashboard displaying many images, updating a single item's state (e.g. compression status) causes a full re-render of the entire list if the item rendering logic is inline.
**Action:** Extract list item logic into a separate component wrapped in `React.memo()`. Use `useCallback()` for all handlers passed to the item, and use the 'latest ref' pattern (e.g. `useRef` for values like 'quality') to keep callbacks stable without adding values to the dependency array.
