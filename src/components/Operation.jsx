export function Operation({ value, func }) {

    return (
        <div className="btnOper">
            <button type="submit"
                    onClick={() => func(value)}>{ value }</button>
        </div>
    );
}