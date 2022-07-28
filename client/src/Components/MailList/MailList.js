import "./MailList.css";

function MailList(props) {
    return (
        <div className="mail">
            <h1 className="mail-title">
                Save Time , save Money
            </h1>
            <span className="mail-desc">
                Sign up and we'll send
            </span>
            <div className="mail-input-container">
                <input
                    type="text"
                    placeholder="Your Email"
                />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default MailList;