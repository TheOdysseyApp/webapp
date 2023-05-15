import { TextField } from "@aws-amplify/ui-react";

function Dev() {

    return (
        <div className="dev">
            <div className="container">
                <h3>hi</h3>
                <TextField
                    placeholder="..."
                    label="don't change this input value"
                    value="it will break prod"
                    onChange={(e) => this.iWarnedYou}
                ></TextField>
            </div>
        </div>
    )
}

export default Dev;