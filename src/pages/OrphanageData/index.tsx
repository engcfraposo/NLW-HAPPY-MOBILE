import React, { useState } from 'react';
import { Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Yup from 'yup';
import { DataContainer, ImageInput, Input, Label, LabelError, LabelWeekend, SwitchContainer, TextArea, Title } from './styles';
import NextStepButton from '../../Components/NextStepButton';
import { Bold, SemiBold } from '../../fonts';
import { useFormik } from 'formik';
import { api } from '../../services/api';
import { PositionRouteParams } from '../../@types/types';


export default function OrphanageData() {

  const [openWeekends, setOpenWeekends] = useState<boolean>(true);
  const [images, setImages] = useState<File[]>([]);

  const navigation = useNavigation();
  const route  = useRoute();

  const params = route.params as PositionRouteParams;

 
  const formik = useFormik({
    initialValues: {
      name: '',
      about: '',
      instructions: '',
      opening_hours: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Requerido'),
      about: Yup.string().required('Requerido').max(300),
      instructions: Yup.string().required('Requerido'),
      opening_hours: Yup.string().required('Requerido'),
    }),
    onSubmit: (values) => {

      const data = new FormData();

      const {
        name,
        about,
        instructions,
        opening_hours,
      } = values;

      const {
        latitude,
        longitude,
      } = params.position;
    
      data.append('name', name);
      data.append('about', about);
      data.append('latitude', String(latitude));
      data.append('longitude', String(longitude));
      data.append('instructions', instructions);
      data.append('opening_hours', opening_hours);
      data.append('open_on_weekends', String(openWeekends));
      const HandleSubmit = async () =>{
        try {
          await api.post('orphanages', data);
          alert('Dados alterados com sucesso!');
          return navigation.navigate('OrphanageMap');
        } catch (error) {
          console.log(error);
          return alert('Erro no cadastro sucesso!');
        }
      }
      HandleSubmit();
    },
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik;


  return (
    <DataContainer contentContainerStyle={{ padding: 24 }}>
      <Title 
        style={Bold}>Dados</Title>

      <Label 
        style={[SemiBold, {textAlignVertical: 'top'}]}
      >
        Nome
      </Label>
      <Input
        mode="outlined" 
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        error={
          typeof errors.name === null ||
          typeof errors.name === undefined ||
          errors.name === ""
        }
        value={values.name}
      />
      {errors.name && <LabelError>{errors.name}</LabelError>}

      <Label 
        style={[SemiBold, {textAlignVertical: 'top'}]}
      >
        Sobre
      </Label>
      <TextArea
        mode="outlined"  
        multiline
        onChangeText={handleChange("about")}
        onBlur={handleBlur("about")}
        error={
          typeof errors.about === null ||
          typeof errors.about === undefined ||
          errors.about === ""
        }
        value={values.about}
      />
      {errors.name && <LabelError>{errors.name}</LabelError>}
      <Label 
        style={[SemiBold, {textAlignVertical: 'top'}]}
      >
        Fotos
      </Label>
      <ImageInput onPress={() => {}}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImageInput>

      <Title 
        style={Bold}>Visitação</Title>

      <Label 
        style={[SemiBold, {textAlignVertical: 'top'}]}
      >
        Instruções
      </Label>
      <TextArea
        mode="outlined"  
        multiline
        onChangeText={handleChange("instructions")}
        onBlur={handleBlur("instructions")}
        error={
          typeof errors.instructions === null ||
          typeof errors.instructions === undefined ||
          errors.instructions === ""
        }
        value={values.instructions} 
      />
      {errors.name && <LabelError>{errors.name}</LabelError>}
      <Label 
        style={[SemiBold, {textAlignVertical: 'top'}]}
      >
        Horario de visitas
      </Label>
      <Input
        mode="outlined"  
        onChangeText={handleChange("opening_hours")}
        onBlur={handleBlur("opening_hours")}
        error={
          typeof errors.opening_hours === null ||
          typeof errors.opening_hours === undefined ||
          errors.opening_hours === ""
        }
        value={values.opening_hours}
      />
      {errors.name && <LabelError>{errors.name}</LabelError>}
      <SwitchContainer>
        <LabelWeekend 
          style={[SemiBold, {textAlignVertical: 'top'}]}
        >
          Atende final de semana?
        </LabelWeekend>
        <Switch value={openWeekends} onValueChange={setOpenWeekends} />
      </SwitchContainer>

      <NextStepButton 
        text="Cadastrar"
        handleSubmit={handleSubmit}
      />
    </DataContainer>
  )
}

