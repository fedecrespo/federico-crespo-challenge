import React, { useState, ChangeEvent, FormEvent } from 'react';
import FieldRenderer from './FieldRenderer';
import type { SchemaType } from '../schema/page';
import { storeData } from '../services/utils';
import { DataType } from '../types';
import { evaluateCondition } from '../services/conditionEvaluator';
import { useRouter } from 'next/router';

interface FormProps {
  schema: SchemaType;
}

const Form: React.FC<FormProps> = ({ schema }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<DataType>({
    heading: '',
    description: '',
    primaryButtonText: '',
    secondaryButtonText: '',
    truncateDescription: false,
  });
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = schema.required.filter((fieldName) => !formData[fieldName]);

    if (errors.length === 0) {
      storeData('federico_crespo', formData);
      router.push('/site');
    } else {
      setErrorFields(errors);
    }
  };

  return (
    // TODO-1: Form should submit this information
    <form className="space-y-8" onSubmit={handleSubmit}>
      {Object.keys(schema.properties).map((fieldName) => {
        const condition = schema.properties[fieldName].condition;

        if (condition && formData && !evaluateCondition(condition, formData)) {
          return null;
        }

        return (
          <FieldRenderer
            key={fieldName}
            fieldName={fieldName}
            schema={schema}
            isError={errorFields.includes(fieldName)}
            handleInputChange={handleInputChange}
          />
        );
      })}

      <div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
