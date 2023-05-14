import React from "react";
import logo from "./logo.svg";
import nextlogo from "./next-js-seeklogo.com.svg";
import { Text, Paper } from "@mantine/core";

const IconList = () => {
  return (
    <div style={{ margin: "30px", display: "flex", justifyContent: "center" }}>
      <Paper style={{width: "1000px"}} shadow="xl" radius="lg" p="md" withBorder>
        <Text>
          <div className="bg-white px-10 py-5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
                Skills
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  className="col-span-2 max-h-30 w-full object-contain lg:col-span-1"
                  src={logo}
                  alt="react"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-30 w-full object-contain lg:col-span-1"
                  src={nextlogo}
                  alt="next"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </Text>
      </Paper>
    </div>
  );
};

export default IconList;
