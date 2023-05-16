import React, { useState } from 'react';
import { TextField } from "@aws-amplify/ui-react";
import DateTime from '../../components/datetime/DateTime';


function Dev() {
    const [text, setText] = useState(null);
    const [date, setDate] = useState(null);

    return (
        <div className="dev">
            <div className="container">
                <h3>dev workbench</h3>
                <TextField
                    placeholder="..."
                    label="field label"
                    defaultValue='default value'
                    onChange={(e) => setText(e.target.value)}
                ></TextField>
                <DateTime onChange={setDate} value={date} label='datetime test'/>
            </div>
        </div>
    )
}

export default Dev;