import {
  CoreRow,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { AdminResponse } from "../types/AdminResponse";
import { ImSpinner10 } from "@react-icons/all-files/im/ImSpinner10";
import { Roles } from "../../types/Roles";

const columnHelper = createColumnHelper<AdminResponse>();

interface ITableProps {
  data: Array<AdminResponse>;
  handleClick: (value: CoreRow<AdminResponse>["original"]) => void;
}

export const Table: React.FC<ITableProps> = ({ data, handleClick }) => {
  const columns = [
    columnHelper.accessor("name", {
      header: () => <span>Full name</span>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("role", {
      header: () => <span>Role</span>,
      cell: (info) => info.renderValue() ?? Roles.USER,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("actions", {
      header: () => <span>Actions</span>,
      cell: (info) => {
        return (
          info.renderValue() && (
            <div className="w-full flex items-center justify-center">
              <button
                className="bg-teal-300 hover:shadow-sm duration-500 text-gray-700 rounded-md p-2 px-4 text-xs"
                onClick={() => handleClick(info.row.original)}
              >
                HR
              </button>
            </div>
          )
        );
      },
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!data.length) {
    return (
      <div className="w-full flex items-center justify-center my-5">
        <ImSpinner10
          className="animate-spin duration-500 text-blue-500"
          size={32}
        />
      </div>
    );
  }
  return (
    <div className="p-7 w-full">
      <table className="border-gray-800 border rounded-md p-3 w-full">
        <thead className="p-3">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=" border font-medium text-gray-600 border-gray-800 p-4"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    key={cell.id}
                    className={clsx({
                      "border border-gray-800 p-4": true,
                      capitalize: cell.column.id !== "email",
                    })}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
