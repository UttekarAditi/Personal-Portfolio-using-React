// Here, React uses useState instead of manual DOM.
function Modal({ project, closeModal }) {       //Modal is a function component, It receives data from parent component                                         t
    if (!project) return null;                //null in React means → render nothing

    return (
        <div className="modal" style={{ display: "flex" }}>
            <div className="modal-content">
                <span className="close-btn" onClick={closeModal}>x</span>

                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <p><b>Tech Used : </b> {project.tech}</p>

                <div className="modal-buttons">
                    <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        Live Demo
                    </a>

                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Modal;
                                                //Modal is a function component, It receives data from parent component                                         t
                                                //null in React means → render nothing
    
    


// -> ALL ABOUT THE CODE
// This is a Modal component.
// Modal = popup window
// It shows project details when user clicks a project.


// User clicks project card
// setSelectedProject({...}) runs
// project now has data
// Modal receives project as prop
// if (!project) is false
// Modal appears

// -> When user clicks close:

// closeModal() runs
// setSelectedProject(null)
// project becomes null
// if (!project) return null
// Modal disappears

// This Modal component conditionally renders project details. If project data exists, the modal is displayed. 
// If project is null, it returns null and nothing renders. The close button calls a function passed as prop to reset
//  the state and hide the modal."




// “Why did you create a separate Modal component?”
// "I created a separate Modal component to keep the code modular and reusable. React promotes component-based 
// architecture, so separating UI elements like modal improves maintainability and scalability."


// We create Modal.js because:
// 1) Separation of Concerns (Clean Code)

// Instead of writing modal code inside Projects.js,
// we keep it in a separate component.

// 👉 Makes code:

// Clean
// Organized
// Easy to understand
// Easy to debug



//2)  Reusability (Very Important in React)

// If tomorrow you want to:Open modal from Contact section

// Show image preview
// Show resume popup
// You can reuse the same <Modal /> component.
// Without rewriting everything.



//3) React Works Component-Based
//  React philosophy =
// 🔹 Break UI into small reusable components



// Conditional rendering in React means displaying UI elements based on certain conditions, usually using
// logical operators or ternary operators."

// Conditional rendering means showing or hiding UI based on a condition.
// Simple meaning:

// “If condition is true → show something
// If condition is false → don’t show it”

// 🧠 Real Life Example

// If user is logged in → show Dashboard
// If user is not logged in → show Login page

// That is conditional rendering.


// In your React portfolio:

// {selectedProject && <Modal />}
// This means:

// If selectedProject has value → Modal shows
// If selectedProject is null → Modal hides

// That is conditional rendering.



// In Your Portfolio , Your modal works because of conditional rendering.

// When you click project:

// setSelectedProject({...})
// Condition becomes true → Modal appears.

// When you close:

// setSelectedProject(null)
// Condition becomes false → Modal disappears.


// 3 ways to do conditional rendering
// -> Using && (Most Common)
// {isOpen && <Modal />}
// ✔ Clean
// ✔ Short
// ✔ Professional

// -> Using Ternary Operator
// {isLoggedIn ? <Dashboard /> : <Login />}
// Meaning:
// If true → show Dashboard
// Else → show Login

// -> Using if statement (Inside JS)
// if (isAdmin) {
//   return <AdminPanel />;
// }


// Why It’s Important, Because React is dynamic.

// We use conditional rendering for:
// Modals
// Loading spinners
// Login/logout
// Error messages
// Admin panels
// Dark mode toggle


