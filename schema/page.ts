import { Condition } from '../types/condition';

export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    heading: {
      title: 'Heading',
      type: 'string',
      placeholder: 'Enter heading here',
    },
    description: {
      title: 'Description',
      type: 'string',
      placeholder: 'Enter description here',
    },
    primaryButtonText: {
      title: 'Primary Button Text',
      type: 'string',
      placeholder: 'Enter primary button text here',
    },
    secondaryButtonText: {
      title: 'Secondary Button Text',
      type: 'string',
      placeholder: 'Enter secondary button text here',
    },
    truncateDescription: {
      title: 'Truncate Description',
      type: 'boolean',
      condition: {
        dependencyField: 'description',
        operation: 'greater_than',
        value: 100,
      },
    },
  },
  required: [
    'heading',
    'description',
    'primaryButtonText',
    'secondaryButtonText',
  ],
};

export type SchemaType = {
  type: string;
  properties: {
    [key: string]: {
      title: string;
      type: string;
      condition?: Condition;
      placeholder?: string;
    };
  };
  required: string[];
};
