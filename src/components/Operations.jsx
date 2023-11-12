import { Operation } from "./Operation";

export function Operations({ func }) {
    return (
        <div className="operations">
            <Operation func={func} value={'+'}/>
            <Operation func={func} value={'-'}/>
            <Operation func={func} value={'*'}/>
            <Operation func={func} value={'/'}/>
        </div>
    );
}