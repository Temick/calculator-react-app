import { useState } from "react";
import * as math from "mathjs";

export function Result({ num1, num2, oper }) {
    const [state,setState] = useState(false)
    let res = null;
    let errorMessage = null;

    if (state) {
        try {
          res = math.evaluate(`${num1.trim()} ${oper.trim()} ${num2.trim()}`);
        } catch (error) {
          errorMessage = "Ошибка! Проверьте правильность введенных данных, либо выбрали ли вы операцию";
        }
      }

    return (
        <div>
            <button type="button"
                    onClick={() => setState((prev) => !prev)}>Результат</button>
            {state && (
                <div>
                {errorMessage ? (
                    <p>{errorMessage}</p>
                ) : (
                    <h3>{res}</h3>
                )}
                </div>
            )}
        </div>
    );
}