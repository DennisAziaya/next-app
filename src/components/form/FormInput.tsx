
import React, {ChangeEvent} from 'react';

interface formInputProps  {
    inputLabel: string;
    inputId: string;
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<formInputProps> = ({inputLabel, inputId, inputName, inputPlaceholder, inputType, onInputChange}) => {
    return (
        <div>
            <label htmlFor={inputId} className="block text-black">
                {inputLabel}
            </label>
            <div className="mt-1">
                <input
                    required
                    id={inputId}
                    name={inputName}
                    type={inputType}
                    onChange={onInputChange}
                    placeholder={inputPlaceholder}
                    className="block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-300 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 "
                />
            </div>
        </div>
    );
};

export default FormInput;
