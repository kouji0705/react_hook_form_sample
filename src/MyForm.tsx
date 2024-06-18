import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

type Inputs = {
  name: string;
  email: string;
};

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name", { required: "名前は必須です。" })}
        label="名前"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
      />
      <TextField
        {...register("email", { 
          required: "メールアドレスは必須です。",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "有効なメールアドレスを入力してください。"
          }
        })}
        label="メールアドレス"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
      />
      <Button type="submit" variant="contained" color="primary">
        送信
      </Button>
    </form>
  );
};

export default MyForm;
