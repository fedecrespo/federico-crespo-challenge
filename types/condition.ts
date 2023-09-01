export type Condition = {
  dependencyField: string;
  operation:
    | 'greater_than'
    | 'not_empty'
    | 'only_numbers'
    | 'any_other_operation'; // Add other operations here
  value?: any;
};
