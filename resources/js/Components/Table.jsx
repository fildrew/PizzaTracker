import React from 'react';

const Table = ({ items, columns, primary, action }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-200"
                            >
                                {column}
                            </th>
                        ))}
                        {action && (
                            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-200">
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="py-2 px-4 border-b border-gray-200"
                                >
                                    {item[column]}
                                </td>
                            ))}
                            {action && (
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <a
                                        href={`/${action}/${item[primary]}`}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Edit
                                    </a>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
