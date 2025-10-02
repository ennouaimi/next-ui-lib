// GraphBar.tsx
import React from "react";
import { Card } from "../card";
import { ResponsiveBar, BarDatum } from "@nivo/bar";

export type DataItem = {
  day: string;
  consistency: number;
};

export interface GraphBarProps {
  days: string[];
}

const GraphBar: React.FC<GraphBarProps> = ({ days = [] }) => {
  // Deterministic test data
  const data: DataItem[] = days.map((day, index) => ({
    day,
    consistency: 20 + index * 10,
  }));

  const loading = false;

  return (
    <Card title="Consistency" button buttonLabel="more" buttonSize="small">
      <ResponsiveBar
        data={data}
        keys={["consistency"]}
        indexBy="day"
        margin={{ top: 10, right: 20, bottom: 30, left: 30 }}
        padding={0.3}
        colors={loading ? "#E5E7EB" : "#FEC703"}
        borderRadius={6}
        enableLabel={false}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fill: "#6E6E6E",
                fontFamily: "gabaritoMedium",
              },
            },
          },
          grid: {
            line: { stroke: "#EFEFEF" },
          },
        }}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickValues: loading ? [] : undefined,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
          tickValues: loading ? [] : [0, 25, 50, 75, 100],
        }}
        gridYValues={loading ? [] : [0, 25, 50, 75, 100]}
        enableGridX={!loading}
        maxValue={100}
        layers={[
          "grid",
          "axes",
          ({ bars, yScale }) => (
            <>
              {bars.map((bar) => {
                const fullHeight = Math.abs(yScale(100) - yScale(0));
                return (
                  <rect
                    key={`${bar.key}-bg-${bar.index}`}
                    x={bar.x}
                    y={yScale(100)}
                    width={bar.width}
                    height={fullHeight}
                    fill="#F2F2F2"
                    rx={6}
                    ry={6}
                  />
                );
              })}
            </>
          ),
          "bars",
          "markers",
          "legends",
        ]}
        tooltip={({ id, value }) =>
          !loading && (
            <div
              style={{
                padding: 8,
                background: "white",
                borderRadius: 6,
                fontSize: 12,
                color: "#374151",
                fontFamily: "gabaritoBold",
                border: `2px solid #E0E7F6`,
              }}
            >
              {id}: {Math.floor(value as number)}%
            </div>
          )
        }
      />
    </Card>
  );
};

export { GraphBar };
