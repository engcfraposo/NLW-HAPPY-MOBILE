import React, { useState } from 'react';
import { Switch, ToastAndroid } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { DataContainer, ImageContainer, ImageInput, Input, Label, LabelError, LabelWeekend, OrphanageImage, SwitchContainer, TextArea, Title } from './styles';
import NextStepButton from '../../Components/NextStepButton';
import { Bold, SemiBold } from '../../fonts';
import { useFormik } from 'formik';
import { api } from '../../services/api';
import { PositionRouteParams } from '../../@types/types';


export default function OrphanageData() {

  const [openWeekends, setOpenWeekends] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);

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
      images.forEach((image, index) => {
        data.append('images', {
          name: `image_${index}.jpg`,
          type: 'image/jpg',
          uri: image,
        } as any);
      });

      const handleSubmit = async () =>{
        try {
          await api.post('orphanages', data);
          ToastAndroid.show('Dados alterados com sucesso!', ToastAndroid.SHORT);
          return navigation.navigate('OrphanageMap');
        } catch (error) {
          console.log(error);
          return ToastAndroid.show('Erro no cadastro sucesso!', ToastAndroid.SHORT);
        }
      }
      handleSubmit();
    },
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik;

  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(status !== 'granted'){
      ToastAndroid.show(
        'Eita..Precisamos de sua permissão de acesso as suas fotos!', 
        ToastAndroid.SHORT
        );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    
    if(result.cancelled){
      return;
    }

    const { uri } = result;
    
    setImages([...images, uri]);

  }
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

      <ImageContainer>
      {images.map( image => (
        <OrphanageImage 
          key={image}
          source={{uri: image}} 
        />
      ))}
      </ImageContainer>
      
      <ImageInput onPress={handleSelectImage}>
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

