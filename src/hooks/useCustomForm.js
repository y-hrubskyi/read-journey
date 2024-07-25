import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const useCustomForm = (props = {}) => {
  const [schema, setSchema] = useState(props.schema ?? null);

  const updateSchema = useCallback(newSchema => {
    setSchema(oldSchema => {
      if (oldSchema) {
        return Yup.object().shape({
          ...oldSchema.fields,
          ...newSchema.fields
        });
      }
      return newSchema;
    });
  }, []);

  const form = useForm({
    ...props,
    mode: 'onChange',
    resolver: schema ? yupResolver(schema) : undefined
  });

  return {
    ...form,
    updateSchema
  };
};
