import React from "react";
import { Text, Paper } from "@mantine/core";

const DescriptionLists = () => {
  return (
    <div style={{margin: "30px", display: "flex", justifyContent: "center"}}>
      <Paper style={{width: "1000px"}} shadow="xl" radius="lg" p="md" withBorder>
        <Text>                               
        <div className="px-4 sm:px-0">
        <h1 className="text-center text-2xl font-semibold leading-7 text-gray-900">
          Profile
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="text-lg leading-6 text-gray-700">
              Tetsuro Ishimoto
            </dd>
          </div>
          <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Stack
            </dt>
            <dd className="text-lg leading-6 text-gray-700">
              Frontend Developer
            </dd>
          </div>
          <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="text-lg leading-6 text-gray-700">
              tetsu.ismt@gmail.com
            </dd>
          </div>
          <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Belonging
            </dt>
            <dd className="text-lg leading-6 text-gray-700">
              Kwansei Gakuin University
            </dd>
          </div>
          <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Major
            </dt>
            <dd className="text-lg leading-6 text-gray-700">
              Computer Science
            </dd>
          </div>
          <div className="text-center px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">
              Links
            </dt>
            <dd className="text-lg leading-6 text-gray-700">
              github: Tetsu-is
            </dd>
          </div>
        </dl>
      </div>
        </Text>
      </Paper>
    </div>
  );
};

export default DescriptionLists;