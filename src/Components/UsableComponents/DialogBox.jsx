import React, { useEffect, useRef } from "react";
import "../../app.css";

export default function DialogBox({ open, onClose, data }) {
    console.log("data is",data);
    const dialogRef = useRef(null);

    // Close dialog when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    return (
        <>
            {open && (
                <div className="main-dialog">
                    <div className="dialog-section" ref={dialogRef}>
                        <button className="close-button" onClick={onClose}>
                            &times; {/* Close icon */}
                        </button>
                        <div className="dialog-content">
                            <h3>Hi {data.username}, 👋</h3>
                            <h4>
                                Thanks for reaching out! I appreciate your time and
                                look forward to connecting. 😊
                            </h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
