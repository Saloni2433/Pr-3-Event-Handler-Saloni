import { useState } from "react";

function ConditionalRender() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleToggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Conditional Render</h1>

                {isLoggedIn ? (
                    <p>Welcome back</p>
                ) : (
                    <p>Log in</p>
                )}

                <button
                    onClick={handleToggleLogin}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        marginTop: "20px",
                    }}
                >
                    {isLoggedIn ? "Log Out" : "Log In"}
                </button>
            </div>
        </>
    );
};

export default ConditionalRender;
