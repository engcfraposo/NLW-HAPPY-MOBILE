import { FormEvent } from "react";
import { LatLng } from "react-native-maps";

export interface TextType {
    text: string;
    position?: LatLng;
}

export interface HeaderProps extends TextType{
    showCancel?: boolean;
    handleSubmit?: (e?: React.FormEvent<HTMLFormElement>);
}

export interface Card {
    typeCard: string
    hours?: string
}

export interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export interface OrphanageWithDetail extends Orphanage {
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: {
        id: number;
        url: string;
    }[]
}

export interface OrphanageRouteParams {
    id: number;
}

export interface PositionRouteParams {
    position: {
        latitude: number;
        longitude: number;
    }
}