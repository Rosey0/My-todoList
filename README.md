# 📝 My Todo List App

A React-based to-do list application featuring category tagging, editing, filtering, and drag-and-drop reordering, styled with Tailwind CSS.

> Developed as part of my personal front-end learning and portfolio.

---

## 🔧 Tech Stack

- **React (v19)** – Functional components with hooks
- **Tailwind CSS** – Utility-first CSS framework for fast UI styling
- **@hello-pangea/dnd** – React-based drag-and-drop support
- **LocalStorage** – Keeps tasks persistent across browser sessions

---

## 📁 Project Structure

```bash
my-todo-app/
├── src/
│   ├── components/
│   │   ├── AddTaskForm.js       # Task input field and Add button
│   │   ├── SearchTask.js        # Filtering UI for category/status
│   │   └── TaskItem.js          # Individual task UI logic
│   ├── utils/
│   │   ├── addTask.js           # Function to create and add a task
│   │   └── toggleEditMode.js    # Function to manage edit state transitions
│   ├── App.jsx                  # Main state and logic controller
│   ├── index.css                # Tailwind CSS directives
│   └── index.js                 # React app entry point
├── tailwind.config.js
└── package.json
```

---

## 🧱 Component Breakdown

### 🔹 `components/`

#### `AddTaskForm.js`
- Manages new task input and category selection
- Supports both click and Enter key submission

#### `SearchTask.js`
- Provides category and completion status filters
- Controlled components for filter state

#### `TaskItem.js`
- Handles display of each task
- Dynamic rendering based on `isEditing` and `completed`
- Supports drag-and-drop, check, edit, delete, and inline editing

---

### 🔸 `utils/`

#### `addTask.js`
- Creates a new task object with required default properties
- Adds the task to the current list state

#### `toggleEditMode.js`
- Switches between edit and display mode for a task
- Handles validation (prevents saving empty input)
- Saves updated taskName from editValue

---

## 🎯 Why This Structure?

- **Separation of Concerns**  
  Business logic and UI are cleanly separated for clarity and maintainability.

- **Readability and Reusability**  
  Utility functions are extracted to improve readability and promote reuse.

- **Scalable Component Design**  
  State lives in the top-level component (`App`), passed down via props.

- **Tailwind Efficiency**  
  Tailwind allows fast prototyping and layout tuning without needing external CSS files.

- **Easy DnD Integration**  
  Drag-and-drop support added with minimal refactoring using `@hello-pangea/dnd`.

---

## 💡 User Interaction Flow

1. User enters a task and selects a category
2. `addTask.js` generates a task object and updates state
3. The task is rendered through `TaskItem`
4. Dragging updates order via `onDragEnd`
5. Edit mode handled via `toggleEditMode.js` with validation

---

## 🚀 Getting Started

```bash
git clone https://github.com/Rosey0/My-todoList.git
cd my-todoList
npm install
npm start
```

---

## 📜 License

MIT
