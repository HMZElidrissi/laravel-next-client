import React from 'react';

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
    className,
    children,
    ...props
}) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
);

export default Label;
