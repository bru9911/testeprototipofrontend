<!DOCTYPE html>
<html lang="pt-br">
   <head>
       <meta charset="utf-8"/>
       <title>Teste Protótipo front end</title>
       <script src="jquery-3.6.1.min.js"></script>
   </head>
   <body>
       
import React from  "react";

import { useForm } from  "react-hook-form";

import { yupResolver } from  "@hookform/resolvers/yup";

import  *  as yup from  "yup";

import Form from  "../form";

import Fields from  "../fields";

import Button from  "../button";

const  NewUser  = () => {

  const  phoneReg  =  /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/

  const  schema  = yup.object().shape({

    name: yup.string().required(),

    email: yup.string().email("Email invalido").required(),

    phone: yup.string().matches(phoneReg, "Senha incorreta"),

    passwd: yup.string().required(),

  });

  const { register, handleSubmit, formState: { errors } } =  useForm({

    resolver:  yupResolver(schema)

  });

  const  newLogUser  = (data) =>{

    console.log(data);

  };

  return (

    <Form  onSubmit={handleSubmit(newLogUser)}>

      <Fields  label="login"  name="Nome"  type="text"  register={register} />

      <p>{errors.name?.message}</p>


      <Fields  label="telefone"  name="passwd"  type="senha"  register={register} />

      <p>{errors.senha?.message}</p>


      <Fields  label="senha"  name="passwd"  type="number"  register={register} />

      <p>{errors.passwd?.message}</p>


      <Fields  label="email"  name="email"  type="email"  register={register} />

      <p>{errors.email?.message}</p>

      <Button>Próximo passo</Button>

    </Form>

  );

}

export  default  NewUser;


<Form  onSubmit={handleSubmit(newLogUser)}>

<Fields  label="cep"  name="CEP"  type="number"  register={register} />

<p>{errors.cep?.message}</p>


<Fields  label="rua"  name="Rua"  type="text"  register={register} />

<p>{errors.rua?.message}</p>


<Fields  label="numero"  name="numero"  type="number"  register={register} />

<p>{errors.numero?.message}</p>


<Fields  label="bairro"  name="bairro"  type="text"  register={register} />

<p>{errors.bairro?.message}</p>

<Fields  label="cidade"  name="cidade"  type="text"  register={register} />

<p>{errors.cidade?.message}</p>

<Fields  label="ponto de referencia"  name="Ponto de referência"  type="string"  register={register} />

<p>{errors.referencia?.message}</p>


<Button>Próximo passo</Button>

<Fields  label="sobre"  name="Nos conte mais sobre você"  type="text"  register={register} />

      <p>{errors.sobre?.message}</p>

</Form>


<Button>Próximo passo</Button>
);

}

export  default  NewUser;


<Fields  label="usuariocriado"  name="Usuário criado"  type="text"  register={register} />

      <p>{errors.register?.message}</p>

</Form>
</body>
</html>