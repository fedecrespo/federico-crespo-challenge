import { Condition, DataType } from '../types';

export const evaluateCondition = (
  condition: Condition,
  formData: DataType
): boolean => {
  const data = formData[condition.dependencyField];
  switch (condition.operation) {
    case 'greater_than':
      if (typeof data === 'string') {
        return data.length > condition.value;
      }
      return data > condition.value;
    case 'not_empty':
      return data !== undefined && data !== '';
    case 'only_numbers':
      return /^\d+$/.test(data);
    // ... Add other cases as needed
    default:
      return true; // default to showing the field
  }
};
