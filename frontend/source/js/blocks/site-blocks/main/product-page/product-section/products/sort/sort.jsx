import React from 'react';

import { Form, Select, Option } from './components';

import mock from './mock/mock';

export default function Sort() {
  return (
    <Form method="GET" className="sort">
      <Select name="sort-type" id="sort-type" title="Меню сортировки">
        {mock.map((option) => (
          <Option key={option} value={option}>{option}</Option>
        ))}
      </Select>
    </Form>
  );
}
