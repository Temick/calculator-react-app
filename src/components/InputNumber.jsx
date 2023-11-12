export function InputNumber({ func }) {

    return (
        <div>
            <input type="number" 
                    name="number"
                    onChange={(event) => func(event.target.value)}
                    placeholder="Введите число"/>
        </div>
    );
}