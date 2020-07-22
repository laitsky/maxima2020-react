import React from 'react';
import { useForm } from 'react-hook-form';

export default function HookForm() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && 'First name is required'}
      <input name="lastName" ref={register({ required: true })} />
      {errors.lastName && 'Last name is required'}
      <input type="submit" />
    </form>
  );
}
