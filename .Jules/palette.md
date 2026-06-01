## 2026-05-24 - [Missing Keyboard Focus & Form Associations]
**Learning:** This app's interactive elements (buttons, inputs) completely lacked `:focus-visible` outlines, making keyboard navigation nearly impossible for sighted users. Additionally, custom form controls like the quality range slider were not programmatically associated with their labels.
**Action:** Always verify custom range inputs have `id` and `htmlFor` bindings, and globally establish a `:focus-visible` ring style (e.g., using an outline with an offset) if the default is suppressed or insufficient.
