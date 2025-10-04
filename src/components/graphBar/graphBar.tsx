"use client";

import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Card } from "../card";
import { ButtonColor } from "@/constants/colors";

export interface GraphBarProps {
  data: Array<Record<any, any>>;
  loading?: boolean;
  buttonColor?: ButtonColor;
  buttonLabel?: string;
  customClass?: string;
}

export const GraphBar: React.FC<GraphBarProps> = ({
  data,
  loading = false,
  buttonColor = "lightBlue",
  buttonLabel = null,
  customClass = "",
}) => {
  return (
    <Card
      title="Consistency"
      buttonColor={buttonColor}
      buttonLabel={buttonLabel}
      buttonSize="small"
      customClass={customClass}
    >
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
                fill: "#535353ff",
                fontWeight: "bold",
                fontFamily: "gabarito",
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
          !loading ? (
            <div
              style={{
                padding: 8,
                background: "white",
                borderRadius: 6,
                fontSize: 12,
                color: "#374151",
                border: `2px solid #E0E7F6`,
              }}
            >
              {id}: {Math.floor(value as number)}%
            </div>
          ) : null
        }
      />
    </Card>
  );
};
