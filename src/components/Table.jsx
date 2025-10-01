const Table = ({ tableData, handleEdit,handleDelete }) => {
    return (
        <table className="w-full border mt-8">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">
                            {data.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            {data.email}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 space-x-2">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => handleEdit(index)}>
                                Edit
                            </button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded"
                              onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;