import type { ReactElement } from "react";
import { Table, TableCell, TableRow } from "./designSystem";

type DataRow = Record<"label" | "data", string | number | Date>;

export default function StatsTable({
  data,
}: {
  data: DataRow[];
}): ReactElement {
  return (
    <Table>
      <tbody>
        {data.map((row, i) => (
          <TableRow key={i}>
            <TableCell appearance="alternative">{row.label}</TableCell>
            <TableCell>{row.data}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
